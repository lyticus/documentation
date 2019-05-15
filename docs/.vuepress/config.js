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
        property: "og:image",
        content: "https://cdn.byteboomers.com/img/logo/png/lyticus--512x512.png"
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
