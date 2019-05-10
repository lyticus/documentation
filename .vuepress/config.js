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
      "/",
      "installation",
      "setup",
      "methods",
      "vue-integration",
      "nuxt-integration",
      "vuepress-integration"
    ]
  }
};
