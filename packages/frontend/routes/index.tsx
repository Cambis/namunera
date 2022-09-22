import { Handlers, PageProps } from "$fresh/server.ts";
import { Counter } from "@/islands";
import { Container, ElementalArea, Hero,  Head, Layout } from "@/components";
import { sdk } from "@/utils";
import type { BaseElement, PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().PageBySlug({ slug: "home" });
    return ctx.render(home);
  },
};

const Home = ({ data: { page, navItems, heroSiteConfig, siteConfig } }: PageProps<PageBySlugQuery>) => (
  <Layout headerProps={navItems}>
    <Head image={undefined} page={page} siteConfig={siteConfig} />
    <Container>
      <Hero heroData={heroSiteConfig} />
      <h1>{page?.title}</h1>
      {page?.elementalArea && (
        <ElementalArea
          elements={page?.elementalArea?.elements.nodes as BaseElement[]}
        />
      )}
    </Container>
  </Layout>
);

export default Home;
