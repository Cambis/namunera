import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Layout } from "@/components";
import { sdk } from "@/utils";

import type { PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const getPages = await sdk().PageBySlug({ slug: slug? slug : "home" });
    return ctx.render(getPages);
  },
};

const Page = ({ data: { page, navItems } }: PageProps<PageBySlugQuery>) => (
    <Layout headerProps={navItems}>
      <Container>
      {
        page?.title && (
              <>
                <h1>{page?.title}</h1>
                <div dangerouslySetInnerHTML={{__html: page?.content }} ></div>
              </>
          )
      }

      {
          !page?.title && (
              <>
                <h1>{`Ooops. Page not found!` }</h1>
              </>
          )
      }

      </Container>
    </Layout>
);

export default Page;
