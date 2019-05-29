module.exports = {
  title: "Lyticus Documentation",
  description: "Documentation for Lyticus",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.byteboomers.com/img/logo/ico/lyticus.ico"
      }
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Lyticus Documentation"
      }
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://documentation.lyticus.com"
      }
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://cdn.byteboomers.com/img/logo/png/lyticus--1200x630.png"
      }
    ],
    [
      "meta",
      {
        property: "og:image:type",
        content: "image/png"
      }
    ],
    [
      "meta",
      {
        property: "og:image:width",
        content: "1200"
      }
    ],
    [
      "meta",
      {
        property: "og:image:height",
        content: "630"
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Lyticus", link: "https://lyticus.com" }
    ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [["/", "About"]]
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
              ["/tracker/integrations/vue", "Vue"],
              ["/tracker/integrations/nuxt", "Nuxt"],
              ["/tracker/integrations/vuepress", "VuePress"]
            ]
          }
        ]
      },
      {
        title: "Devtools",
        collapsable: false,
        children: [["/devtools/", "Introduction"]]
      }
    ]
  }
};
