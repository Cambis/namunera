import { Handlers, PageProps } from "$fresh/server.ts";

import {
  Container,
  ElementalArea,
  Head,
  Layout,
  ProjectShowcase,
} from "@/components";
import { sdk } from "@/utils";

import type { AllProjectPagesQuery, BaseElementInterface } from "@/graphql";

export const handler: Handlers<AllProjectPagesQuery> = {
  async GET(_, ctx) {
    const page = await sdk().AllProjectPages();

    return ctx.render(page);
  },
};

const ProjectsLandingPage = (
  { data: { page, pages, navItems, siteConfig } }: PageProps<
    AllProjectPagesQuery
  >,
) => (
  <Layout headerProps={navItems} footerLinks={navItems} siteConfig={siteConfig}>
    <Head image={undefined} page={page} siteConfig={siteConfig} />
    <Container>
      <h1 className="text-4xl text-center font-bold my-6">{page?.title}</h1>
      <ElementalArea
        elements={page?.elementalArea?.elements.nodes as BaseElementInterface[]}
      />
    </Container>
    <ProjectShowcase pages={pages} />
  </Layout>
);

export default ProjectsLandingPage;
