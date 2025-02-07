import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TMRWDAO documentation",
  description:
    "TMRW DAO, A DAO platform that empowers decentralised governance in the aelf network and ecosystem. Creating, managing and engaging with DAOs is as simple as a few clicks.",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Introduction", link: "/introduction/tomorrow-dao" },
      { text: "Blog", link: "https://github.com/TomorrowDAOProject" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Introducation",
        link: "/",
        items: [
          { text: "Tomorrow DAO", link: "/introduction/tomorrow-dao" },
          { text: "What is DAO?", link: "/introduction/what-is-dao" },
          {
            text: "Create a DAO on Tomorrow DAO",
            link: "/introduction/create-dao",
          },
          {
            text: "How to Enable and Manage a DAO",
            link: "/introduction/how-to-manage",
          },
          {
            text: "Network DAO",
            link:"/introduction/network-dao"
          }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AElfProject/docs-cms" },
    ],
  },
});
