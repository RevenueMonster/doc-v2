const path = require("path");
module.exports = {
  title: "Revenue Monster",
  tagline:
    "Empowering businesses by seamlessly integrating Mobile Payments, Loyalty Programs and Social Media",
  url: "https://revenuemonster.my",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "revenuemonster", // Usually your GitHub org/user name.
  projectName: "doc-v2", // Usually your repo name.
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/")],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: "Revenue Monster",
      logo: {
        alt: "My Site Logo",
        src: "/img/logo.png",
        width: "600px",
      },
      links: [
        {
          to: "docs/introduction/overview",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction/overview",
            },
            {
              label: "SDK",
              to: "docs/quickstart/sdk",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/RevenueMonster/",
            },
            {
              label: "Linkedln",
              href: "https://www.linkedin.com/company/revenuemonster/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/RevenueMonster",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Revenue Monster. All Rights Reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/doc-v2/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
