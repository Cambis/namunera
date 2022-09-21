import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Layout } from "@/components";
import { sdk } from "@/utils";

import type { ProjectPageBySlugQuery } from "@/graphql";

export const handler: Handlers<ProjectPageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().ProjectPageBySlug({ slug: ctx.params.slug });
    return ctx.render(home);
  },
};

const Home = ({ data: { page } }: PageProps<ProjectPageBySlugQuery>) => (
  <Layout>
    <Container>
      <img
        src={`${Deno.env.get("SS_BASE_URL")}${page?.heroImage?.link}`}
        className="w-full h-auto"
        alt={page?.title as string}
      />
      <h1 className="text-4xl font-bold">{page?.title}</h1>
    </Container>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: page?.content as string }} />
    </Container>
  </Layout>
);

export default Home;
