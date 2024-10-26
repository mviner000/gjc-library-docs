import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Cards, Steps, Tabs, Callout } from "nextra/components";
import { Logo } from "@/components/logo";
import { useRouter } from "next/router";
import { MainContentWrapper } from "./components/MainContentWrapper";
import { Frame } from "./components/Frame";
import { GithubMenuBadge } from "./components/GitHubBadge";
import { COOKBOOK_ROUTE_MAPPING } from "./lib/cookbook_route_mapping";
import { GeistSans } from "geist/font/sans";
import FooterMenu from "./components/FooterMenu";
import Link from "next/link";
import {
  AvailabilityBanner,
  AvailabilitySidebar,
} from "./components/availability";
import { CloudflareVideo, Video } from "./components/Video";
import image from "next/image";

const config: DocsThemeConfig = {
  logo: <Logo />,
  main: MainContentWrapper,
  search: {
    placeholder: "Search...",
  },
  navbar: {
    extraContent: (
      <>
        <GithubMenuBadge />
      </>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  editLink: {
    content: "Edit this page on GitHub",
  },
  toc: {
    backToTop: true,
    extraContent: () => {
      const { frontMatter } = useConfig();
      return <AvailabilitySidebar frontMatter={frontMatter} />;
    },
  },
  docsRepositoryBase: "https://github.com/mviner000/gjc-library-api/tree/main",
  footer: {
    content: <FooterMenu />,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title: pageTitle } = useConfig();
    const url =
      "https://gjc-library-docs.vercel.app/" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const description = frontMatter.description ?? "";

    const title = frontMatter.title ?? pageTitle;

    const section = asPath.startsWith("/docs")
      ? "Docs"
      : asPath.startsWith("/changelog/")
      ? "Changelog"
      : asPath.startsWith("/cookbook/")
      ? "Cookbook"
      : asPath.startsWith("/faq/")
      ? "FAQ"
      : "";

    const image = frontMatter.ogImage
      ? "https://langfuse.com" + frontMatter.ogImage
      : `https://langfuse.com/api/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&section=${encodeURIComponent(section)}`;

    const video = frontMatter.ogVideo
      ? "https://langfuse.com" + frontMatter.ogVideo
      : null;

    const cookbook = COOKBOOK_ROUTE_MAPPING.find(
      (cookbook) => cookbook.path === asPath
    );
    const canonical: string | undefined = cookbook?.canonicalPath
      ? "https://langfuse.com" + cookbook.canonicalPath
      : undefined;

    const noindex = frontMatter.noindex === true;

    const titleTemplate =
      asPath === "/"
        ? "GJCLibrary"
        : asPath.startsWith("/blog/")
        ? "%s - GJCLibrary Blog"
        : asPath.startsWith("/docs/guides/")
        ? "%s - GJCLibrary Guides"
        : "%s - GJCLibrary";

    return (
      <>
        <meta name="theme-color" content="#000" />
        <meta property="og:url" content={url} />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        {video && <meta property="og:video" content={video} />}

        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="langfuse.com" />
        <meta name="twitter:url" content="https://langfuse.com" />

        <style
          dangerouslySetInnerHTML={{
            __html: `html { --font-geist-sans: ${GeistSans.style.fontFamily}; }`,
          }}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        <title>{titleTemplate.replace("%s", title)}</title>
      </>
    );
  },
  components: {
    Frame,
    Tabs,
    Tab: Tabs.Tab,
    Steps,
    Card: Cards.Card,
    Cards,
    AvailabilityBanner,
    Callout,
    CloudflareVideo,
    Video,
  },
  banner: {
    key: "banner-hiring",
    dismissible: true,
    content: (
      <Link href="https://lu.ma/xvmbxigl">
        {/* mobile */}
        <span className="sm:hidden">Bump my email: m.viner001@gmail.com →</span>
        {/* desktop */}
        <span className="hidden sm:inline">
          We're currently working for BETA mode, keep updated! Bump my email:
          m.viner001@gmail.com →
        </span>
      </Link>
    ),
  },
};

export default config;
