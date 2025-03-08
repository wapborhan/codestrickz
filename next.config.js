import withNextra from "nextra";

const nextraConfig = withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  basePath: "/", // Change this based on your deployment URL
  reactStrictMode: true,
});

export default nextraConfig;
