import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Codes Trickz</span>,
  project: {
    link: "https://github.com/wapborhan/codestrickz",
  },

  chat: {
    link: "https://discord.gg/BWJz6jTZvs",
  },
  docsRepositoryBase: "https://github.com/wapborhan/codestrickz/tree/main",
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const config = useConfig();
    const { route } = useRouter();
    const isDefault = route === "/" || !config.title;
    const image =
      "" + (isDefault ? "/screencapture.jpg" : `${frontMatter.image}`);

    const url =
      "https://codestrickz.wapborhan.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <title>{`${frontMatter.title} - Codes TrickZ`}</title>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={`${frontMatter.title} - Codes TrickZ - প্রোগ্রামিং শিখুন সম্পূর্ণ বাংলায় `}
        />
        <meta
          property="og:description"
          content={`${frontMatter.description} - Codes TrickZ - প্রোগ্রামিং শিখুন সম্পূর্ণ বাংলায় `}
        />

        <meta property="og:title" content={frontMatter.title} />
        <meta
          name="description"
          content={`${frontMatter.description} - Codes TrickZ - প্রোগ্রামিং শিখুন সম্পূর্ণ বাংলায় `}
        />
        <meta
          property="og:description"
          content={`${frontMatter.description} - Codes TrickZ - প্রোগ্রামিং শিখুন সম্পূর্ণ বাংলায় `}
        />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="wapborhan.com" />
        <meta name="twitter:url" content="https://codestrickz.wapborhan.com" />
        <meta name="apple-mobile-web-app-title" content="Codes Trickz" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
      </>
    );
  },
  editLink: {
    content: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    content: (
      <div
        className="flex w-full flex-col items-center sm:items-start"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>MIT {new Date().getFullYear()} © Codes TrickZ .</span>
        </div>
        <p className="mt-6 text-xs">
          Developed By{" "}
          <a
            href="https://www.srdreamlab.com"
            target="__BLANK"
            style={{
              textDecoration: "underline",
            }}
          >
            SR Dream Lab
          </a>
        </p>
      </div>
    ),
  },
};

export default config;
