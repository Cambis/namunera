import cn from "classnames";
import Footer, { FooterLink } from "./Footer.tsx";
import type { SiteConfigFieldsFragment } from "@/graphql";

import { Header } from "@/components";

import type { ComponentChildren } from "preact";
import type { HeaderLink } from "@/types";

type LayoutProps = {
  classNames?: string;
  children: ComponentChildren;
  headerProps: {
    nodes: HeaderLink[];
  };
  footerLinks: {
    nodes: FooterLink[];
  };
  siteConfig: SiteConfigFieldsFragment | null | undefined;
};

const Layout = (
  { classNames, children, headerProps, footerLinks, siteConfig }: LayoutProps,
) => (
  <>
    <Header nodes={headerProps.nodes} />
    <main className={cn("min-h-screen mx-auto", classNames)}>
      {children}
    </main>
    <Footer
      nodes={footerLinks.nodes}
      siteConfig={siteConfig}
    />
  </>
);

export default Layout;
