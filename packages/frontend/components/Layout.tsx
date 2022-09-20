import type { ComponentChildren } from "preact";
import cn from "classnames";

type LayoutProps = {
  classNames?: string;
  children: ComponentChildren;
};

const Layout = ({ classNames, children }: LayoutProps) => (
  <>
    <main className={cn("min-h-screen max-w-screen-md", classNames)}>
      {children}
    </main>
  </>
);

export default Layout;
