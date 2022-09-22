import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, ElementalArea, Head, Layout } from "@/components";
import { sdk } from "@/utils";

import type { BaseElementInterface, PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const page = await sdk().PageBySlug({ slug: ctx.params.slug });

    return ctx.render(page);
  },
};

const Page = (
  { data: { page, navItems, siteConfig } }: PageProps<PageBySlugQuery>,
) => (
  <Layout headerProps={navItems} footerLinks={navItems} siteConfig={siteConfig}>
    <Head image={undefined} page={page} siteConfig={siteConfig} />
    <Container>
      <h1>{page?.title}</h1>
      {page?.elementalArea && (
        <ElementalArea
          elements={page?.elementalArea?.elements
            .nodes as BaseElementInterface[]}
        />
      )}
    </Container>
  </Layout>
);

export default Page;
