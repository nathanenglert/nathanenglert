let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
	siteMetadata: {
		title: 'Nathan Englert',
		author: 'Nathan Englert',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: 'https://twitter.com/nathanenglert',
		devto: 'https://dev.to/nathanenglert',
		github: `https://github.com/nathanenglert`,
		instagram: 'https://www.instagram.com/nathanenglert/',
		linkedin: 'https://www.linkedin.com/in/nathan-englert/',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://nathanenglert.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-4669276-2',
				anonymize: true
			}
		},
		'gatsby-plugin-sitemap',
		{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:`gatsby-remark-default-html-attrs`,
            options: {
              "p": {
                className: "content",
              }
            }
          }
        ],
      },
    },
		{
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN
      }
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `nathanenglert`,
			},
		},		
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
