import type { SiteConfigFieldsFragment } from "@/graphql";
import type { FooterLink } from "@/types";

type FooterProps = {
  nodes: Array<FooterLink>;
  siteConfig: SiteConfigFieldsFragment | null | undefined;
};

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                className="w-12 h-12"
                alt="the fresh logo: a sliced lemon dripping with juice"
              />
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase pl-2">
                {props.siteConfig?.title}
              </h3>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul role="list" className="mt-4 space-y-4">
                {props.nodes.map((item: FooterLink) => (
                  <li id={item.id}>
                    <a
                      href={item.link}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {props.siteConfig?.linkedInLink?.linkURL
            ? (
              <a
                className="self-start"
                href={props.siteConfig?.linkedInLink?.linkURL ?? ""}
              >
                <img
                  src="/linkedin.svg"
                  height="10"
                  className="mt-7 xl:mt-0"
                />
                <span class="c-footer__link-text sr-only">$Title</span>
              </a>
            )
            : ""}
        </div>
      </div>
      <div>
        <p className="text-base text-gray-400 xl:text-center pl-2 mt-5 border-t border-gray-200 pt-4">
          &copy; {props.siteConfig?.title} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
