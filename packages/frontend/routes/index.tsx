import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Layout, Hero } from "@/components";
import { Counter } from "@/islands";
import { sdk } from "@/utils";

import type { PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().PageBySlug({ slug: "home" });
    return ctx.render(home);
  },
};

const Home = ({ data: { page, navItems } }: PageProps<PageBySlugQuery>) => (
  <Layout headerProps={navItems}>
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
