import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import "tailwindcss/tailwind.css";

const EmptyComponent: React.FC = () => {
  return <></>;
};

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/SJ-Kumar/",
  },
  chat: {
    icon: <ImLinkedin2 />,
    link: "https://linkedin.com/in/sjayanthkumar",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://research.JayanthKumar.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Jayanth's Research repository"} />
        <link rel="icon" href="icon.svg" />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
  feedback: {
    content: <></>,
  },
  logo: (
    <>
      <img src="icon.webp" alt="Abhijith Ganesh" className="h-12 w-12" />
      <span className="text-lg" style={{ fontWeight: 900 }}>
        Abhijith's research repository
      </span>
    </>
  ),
  editLink: {
    // @ts-ignore
    component: <EmptyComponent />,
  },
  footer: {
    text: (
      <>
        <h1 style={{ fontWeight: 700 }}>
          Jayanth Kumar © {new Date().getFullYear()}
        </h1>
      </>
    ),
  },
};

export default config;
