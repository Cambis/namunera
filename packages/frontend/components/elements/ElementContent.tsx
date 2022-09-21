import { ElementContent } from "@/graphql";

const ContentBlock = (element: ElementContent) => {
  const getElement = element.element;

  console.log(element);

  return (
    <>
      {getElement.showTitle && <h3>{getElement.title}</h3>}
      <div
        dangerouslySetInnerHTML={{
          __html: getElement.html,
        }}
      />
    </>
  );
};

export default ContentBlock;
