import { Head as FreshHead } from "$fresh/runtime.ts";

import type { PageFieldsFragment, ImageFieldsFragment, SiteConfigFieldsFragment } from "@/graphql";

type HeadProps = {
  image?: ImageFieldsFragment | null | undefined;
  page: PageFieldsFragment | null | undefined;
  siteConfig: SiteConfigFieldsFragment | null | undefined;
};

const Head = ({ image, page, siteConfig }: HeadProps) => (
  <FreshHead>
    <title>{`${siteConfig?.title} | ${page?.title}`}</title>
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <meta name="description" content={page?.metaDescription as string} />

    {/* Facebook */}
    <meta property="og:url" content={page?.link} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={page?.title as string} />
    <meta property="og:description" content={page?.metaDescription as string} />
    {image && <meta property="og:image" content={`${Deno.env.get("SS_BASE_URL")}${image.link}`} />}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={Deno.env.get("SS_BASE_URL")} />
    <meta property="twitter:url" content={page?.link} />
    <meta name="twitter:title" content={page?.title as string} />
    <meta name="twitter:description" content={page?.metaDescription as string} />
    {image && <meta name="twitter:image" content={`${Deno.env.get("SS_BASE_URL")}${image.link}`} />}
  </FreshHead>
);

export default Head;
