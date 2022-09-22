import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Head, Layout } from "@/components";
import { sdk } from "@/utils";

import type { ProjectPageBySlugQuery } from "@/graphql";

export const handler: Handlers<ProjectPageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().ProjectPageBySlug({ slug: ctx.params.slug });
    return ctx.render(home);
  },
};

const Project = (
  { data: { navItems, page, siteConfig } }: PageProps<ProjectPageBySlugQuery>,
) => (
  <Layout headerProps={navItems}>
    <Head image={page?.heroImage} page={page} siteConfig={siteConfig} />
    <div className="w-full pb-6">
      <img
        src={`${Deno.env.get("SS_BASE_URL")}${page?.heroImage?.link}`}
        className="w-full h-auto"
        alt={page?.title as string}
      />
      <Container>
        <h1 className="text-4xl font-bold my-6">{page?.title}</h1>
      </Container>
    </div>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: page?.content as string }} />
    </Container>
  </Layout>
);

export default Project;
