import type { ComponentChildren } from "preact";
import cn from "classnames";
import Header, { HeaderLink } from './Header.tsx';


type LayoutProps = {
  classNames?: string;
  children: ComponentChildren;
  headerProps: {
    nodes: HeaderLink[]
  };
};

const Layout = ({ classNames, children, headerProps }: LayoutProps) => (
  <>
    <Header nodes={headerProps.nodes} />
    <main className={cn("min-h-screen max-w-screen-md mx-auto", classNames)}>
      {children}
    </main>
  </>
);

export default Layout;
