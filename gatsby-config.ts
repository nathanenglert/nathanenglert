import type { GatsbyConfig } from "gatsby";

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Nathan Englert",
    titleTemplate: "%s - Nathan Englert",
    author: "Nathan Englert",
    description: "A place for Nathan's projects, writings, and experiences.",
    imageUrl: "/images/seo-image.png",
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, CSharp, API, API Developer, Leader, Technology`,
    siteUrl: `https://nathanenglert.com`,

    github: `https://github.com/nathanenglert`,
    instagram: "https://www.instagram.com/nathanenglert/",
    linkedin: "https://www.linkedin.com/in/nathan-englert/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_ID],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nathanenglert.com`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nathan Englert",
        short_name: "Nathan",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/icon.png",
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        orientation: "portrait",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                paragraph: "content",
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
