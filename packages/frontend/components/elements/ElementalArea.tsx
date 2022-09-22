import { BaseElementInterfaceConnection } from "@/graphql";
import ContentBlock from "./ElementContent.tsx";

interface Props {
  elements: BaseElementInterfaceConnection["nodes"];
}

const ElementalArea = ({ elements }: Props) => {
  // content block type
  const components = {
    ElementContent: ContentBlock,
  };

  return (
    <>
      {elements.map((element, i) => {
        // @ts-ignore get element type name
        const type = element.__typename;
        // @ts-ignore load content block
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
