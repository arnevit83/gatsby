const config = require("./src/settings/SiteConfig");

module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: config.siteMap,
				exclude: [`/contact/*`, `/footer/`, `/header/`, `/theme/`],
				query: `
        {
          allSitePage {
                      nodes {
                        path
                      }
                    }
        }
        `,
				resolveSiteUrl: ({ site, allSitePage }) => {
					return config.siteURL;
				},
				serialize: ({ site, allSitePage }) =>
					allSitePage.nodes.map((node) => {
						return {
							url: config.siteURL + node.path,
							changefreq: `daily`,
							priority: 0.7,
						};
					}),
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				start_url: config.siteURL,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icon: config.siteLogo,
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/settings`,
				name: "settings",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/img`,
				name: "images",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/assets`,
				name: "assets",
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads",
						},
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static",
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ["/bootstrap.sass"], // applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins

		"gatsby-plugin-catch-links",
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					config.GoogleAnalytics, // Google Analytics / GA
					config.GoogleAds, // Google Ads / Adwords / AW
					config.MarketingPlatform, // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: config.gtagConfigOptimize_id,
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: ["/admin/**"],
				},
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteURL
                site_url: siteURL
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map((edge) => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteURL + edge.node.fields.slug,
									guid: site.siteMetadata.siteURL + edge.node.fields.slug,
									custom_elements: [{ "content:encoded": edge.node.html }],
								});
							});
						},
						query: `
            {
              allMarkdownRemark(
                filter: {fields: {
                  slug:{ regex: "^/blog/"}
                }},
                
                sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
						output: config.siteRss,
						title: config.siteTitle,
						// optional configuration to insert feed reference in pages:
						createLinkInHead: true,
						match: "^/blog/",
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: config.themeColor,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
};
