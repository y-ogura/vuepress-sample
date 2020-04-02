module.exports = {
    title: "blog",
    base: "/vuepress-sample/",
    dest: "docs",
    themeConfig: {
      description: "ここにはディスクリプションを入れます。",
      nav: [
        { text: "About", link: "/about/" }, // ここはnav barのメニュー表示/aboutページは後ほど
        { text: "Tags", link: "/tag/" },
        { text: "Categories", link: "/category/" }
      ]
    },
    plugins: [
        "@vuepress/blog"
    ]
  };