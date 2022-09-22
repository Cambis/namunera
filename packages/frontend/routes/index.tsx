import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Head,  Hero, Layout } from "@/components";
import { Counter } from "@/islands";
import { sdk } from "@/utils";

import type { PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().PageBySlug({ slug: "home" });
    return ctx.render(home);
  },
};

const Home = (
  { data: { page, navItems, siteConfig } }: PageProps<PageBySlugQuery>,
) => (
  <Layout headerProps={navItems}>
    <Head image={undefined} page={page} siteConfig={siteConfig} />
    <Container>
      <Hero />
      <h1>{page?.title}</h1>
      <img
        src="/logo.svg"
        className="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p className="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </Container>
  </Layout>
);

export default Home;
