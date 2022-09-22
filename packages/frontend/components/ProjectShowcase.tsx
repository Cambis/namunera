import { Container } from "@/components";

import type { ProjectPageFieldsFragment } from "@/graphql";

type ProjectShowcaseProps = {
  pages: { nodes: ProjectPageFieldsFragment[] };
};

const ProjectShowcase = ({ pages }: ProjectShowcaseProps) => (
  <Container>
    <div className="flex flex-row flex-wrap -mx-4">
      {pages?.nodes.map((item) => (
        <a className="block w-1/3 p-4" href={item.link}>
          <img
            src={`${Deno.env.get("SS_BASE_URL")}${item?.heroImage?.link}`}
            className="w-full h-auto"
            alt={item?.title as string}
          />
          <h3 className="text-2xl font-bold">{item?.title}</h3>
        </a>
      ))}
    </div>
  </Container>
);

export default ProjectShowcase;
