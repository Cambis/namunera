import { BaseElementInterfaceConnection } from "@/graphql";
import ContentBlock from "./ElementContent.tsx";

interface Props {
  elements: BaseElementInterfaceConnection["nodes"];
}

const ElementalArea = ({ elements }: Props) => {
  const components = {
    ElementContent: ContentBlock,
  };

  console.log(elements);

  return (
    <>
      {elements.map((element, i) => {
        // @ts-ignore
        const type = element.__typename;
        // @ts-ignore
        const ElementComponent = components[type];

        if (!ElementComponent) {
          return (
            <div key={`${type}--${i}`} className="element">
              No element found for {type}
            </div>
          );
        }

        return (
          <section key={element.id}>
            <ElementComponent element={element} />
          </section>
        );
      })}
    </>
  );
};

export default ElementalArea;
