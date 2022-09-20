import Container from "@/components/Container.tsx";
import Counter from "@/islands/Counter.tsx";
import Layout from "@/components/Layout.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";

import { sdk } from "@/utils/silverstripe.ts";

import type { PageBySlugQuery } from "@/graphql";

export const handler: Handlers<PageBySlugQuery> = {
  async GET(_, ctx) {
    const home = await sdk().PageBySlug({ slug: "home" });
    return ctx.render(home);
  },
};

const Home = ({ data: { page } }: PageProps<PageBySlugQuery>) => (
  <Layout>
    <Container>
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
