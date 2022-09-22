import { Handlers, PageProps } from "$fresh/server.ts";

import {
  Container,
  ElementalArea,
  Head,
  Layout,
  ProjectShowcase, Hero,
} from "@/components";
import { sdk } from "@/utils";
import type { BaseElement, HomepageQuery } from "@/graphql";

export const handler: Handlers<HomepageQuery> = {
  async GET(_, ctx) {
    const home = await sdk().Homepage();
    return ctx.render(home);
  },
};

const Home = (
  { data: { page, pages, navItems, siteConfig } }: PageProps<HomepageQuery>,
) => (
  <Layout headerProps={navItems} footerLinks={navItems} siteConfig={siteConfig}>
    <Head image={undefined} page={page} siteConfig={siteConfig} />
    <Container>
      <Hero heroData={siteConfig} />
      <h1 className="text-4xl font-bold text-center my-6">
        {siteConfig?.title}
      </h1>
      {page?.elementalArea && (
        <ElementalArea
          elements={page?.elementalArea?.elements.nodes as BaseElement[]}
        />
      )}
    </Container>
    <Container>
      <h2 class="text-3xl font-bold text-center my-6">
        Innovation Week Showcase 2022
      </h2>
    </Container>
    <ProjectShowcase pages={pages} />
    <Container>
      <a
        class="px-4 py-2 inline-block text-center rounded-md bg-yellow-200 hover:bg-yellow-300"
        href="/projects"
      >
        Click here to see more
      </a>
    </Container>
  </Layout>
);

export default Home;
