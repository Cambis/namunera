import { ElementContent } from "@/graphql";

const ContentBlock = ( element: ElementContent ) => {
  const getElement = element.element;

  console.log(element);

  return (
    <div>
        { getElement.showTitle && <h3>{getElement.title}</h3> }
        <div dangerouslySetInnerHTML={{
          __html: getElement.html
        }} />
    </div>
  )
}

export default ContentBlock;