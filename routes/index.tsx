import Container from "@/components/Container.tsx";
import Counter from "@/islands/Counter.tsx";
import Layout from "@/components/Layout.tsx";

const Home = () => (
  <Layout>
    <Container>
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
