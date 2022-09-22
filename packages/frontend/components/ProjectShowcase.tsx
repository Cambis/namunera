import { Container } from "@/components";

import type { ProjectPageFieldsFragment } from "@/graphql";

type ProjectShowcaseProps = {
  pages: { nodes: ProjectPageFieldsFragment[] };
};

const ProjectShowcase = ({ pages }: ProjectShowcaseProps) => (
  <Container>
    <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 mb-6">
      {pages?.nodes.map((item) => (
        <a className="block p-4 border-1 shadow-md hover:shadow-xl" href={item.link}>
          <img
            src={`${Deno.env.get("SS_BASE_URL")}${item?.heroImage?.link}`}
            className="w-full h-auto"
            alt={item?.title as string}
          />
          <h3 className="text-2xl font-bold mt-4">{item?.title}</h3>
        </a>
      ))}
    </div>
  </Container>
);

export default ProjectShowcase;
