import type { ComponentChildren } from "preact";
import cn from "classnames";

type ContainerProps = {
  classNames?: string;
  children: ComponentChildren;
};

const Container = ({ classNames, children }: ContainerProps) => (
  <div className={cn("container mx-auto", classNames)}>
    {children}
  </div>
);

export default Container;
