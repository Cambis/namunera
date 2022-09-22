import {
  BaseElementFieldsFragment,
  ElementContentFieldsFragment,
} from "@/graphql";

type ElementContentProps = {
  element: BaseElementFieldsFragment & ElementContentFieldsFragment;
};

const ElementContent = ({ element }: ElementContentProps) => (
  <>
    {element.showTitle && (
      <h3 className="text-2xl font-bold">{element.title}</h3>
    )}
    <div
      dangerouslySetInnerHTML={{
        __html: element.html as string,
      }}
    />
  </>
);

export default ElementContent;
