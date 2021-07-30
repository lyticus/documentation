module.exports = {
  title: "Lyticus Documentation",
  description: "Documentation for Lyticus",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.byteboomers.com/img/logo/ico/lyticus.ico",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Lyticus Documentation",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://documentation.lyticus.com",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://cdn.byteboomers.com/img/logo/png/lyticus--1200x630.png",
      },
    ],
    [
      "meta",
      {
        property: "og:image:type",
        content: "image/png",
      },
    ],
    [
      "meta",
      {
        property: "og:image:width",
        content: "1200",
      },
    ],
    [
      "meta",
      {
        property: "og:image:height",
        content: "630",
      },
    ],
  ],
  themeConfig: {
    logo: "https://cdn.byteboomers.com/img/logo/svg/lyticus.svg",
    repo: "lyticus/documentation",
    docsDir: "docs",
    editLinks: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Lyticus", link: "https://lyticus.com" },
    ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [["/", "About"]],
      },
      {
        title: "Explainer",
        collapsable: false,
        children: [
          ["/explainer/visits", "Visits"],
          ["/explainer/referrers", "Referrers"],
          ["/explainer/navigators", "Navigators"],
        ],
      },
      {
        title: "Tracker",
        collapsable: false,
        children: [
          ["/tracker/", "Introduction"],
          ["/tracker/installation", "Installation"],
          ["/tracker/setup", "Setup"],
          ["/tracker/methods", "Methods"],
          {
            title: "Integrations",
            collapsable: false,
            children: [
              ["/tracker/integrations/", "Introduction"],
              ["/tracker/integrations/react", "React"],
              ["/tracker/integrations/angular", "Angular"],
              ["/tracker/integrations/vue", "Vue"],
              ["/tracker/integrations/nuxt", "Nuxt"],
              ["/tracker/integrations/vuepress", "VuePress"],
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    ["@vuepress/plugin-back-to-top"],
    [
      "sitemap",
      {
        hostname: "https://documentation.lyticus.com",
        exclude: ["/404.html"],
      },
    ],
    [
      "robots",
      {
        host: "https://documentation.lyticus.com",
        policies: [
          {
            userAgent: "*",
            allow: ["/"],
            disallow: ["/404.html"],
          },
        ],
      },
    ],
  ],
};
