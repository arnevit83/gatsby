"use strict";

module.exports = {
  siteMetadata: {
    title: 'Your Yoga Site',
    description: 'Yoga site description.',
    siteUrl: 'https://cms.sparklingpeach.co.uk/'
  },
  plugins: ['gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Your Yoga Site",
      short_name: "YourYogaSite",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#172b4d",
      display: "standalone",
      icon: "src/img/logo.png",
      icon_options: {
        purpose: "any maskable"
      }
    }
  }, 'gatsby-plugin-offline', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass', {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/static/img"),
      name: 'uploads'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/pages"),
      name: 'pages'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/settings"),
      name: 'settings'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/img"),
      name: 'images'
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "".concat(__dirname, "/src/assets"),
      name: 'assets'
    }
  }, {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-relative-images',
        options: {
          name: 'uploads'
        }
      }, {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 2048
        }
      }, {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'static'
        }
      }]
    }
  }, {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: "".concat(__dirname, "/src/cms/cms.js")
    }
  }, {
    resolve: 'gatsby-plugin-purgecss',
    // purges all unused/unreferenced css rules
    options: {
      develop: true,
      // Activates purging in npm run develop
      purgeOnly: ['/all.sass'] // applies purging only on the bulma css file

    }
  }, // must be after other CSS plugins
  'gatsby-plugin-netlify', // make sure to keep it last in the array
  'gatsby-plugin-sitemap', 'gatsby-plugin-catch-links', {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: ["G-QQ3VR8Q8ZR", // Google Analytics / GA
      "", // Google Ads / Adwords / AW
      "" // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/**"]
      }
    }
  }, {
    resolve: "gatsby-plugin-feed",
    options: {
      query: "\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",
      feeds: [{
        serialize: function serialize(_ref) {
          var _ref$query = _ref.query,
              site = _ref$query.site,
              allMarkdownRemark = _ref$query.allMarkdownRemark;
          return allMarkdownRemark.edges.map(function (edge) {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{
                "content:encoded": edge.node.html
              }]
            });
          });
        },
        query: "\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ",
        output: "/rss.xml",
        title: "Your Site's RSS Feed",
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
        match: "^/blog/"
      }]
    }
  }, {
    resolve: "gatsby-plugin-nprogress",
    options: {
      // Setting a color is optional.
      color: "tomato",
      // Disable the loading spinner.
      showSpinner: false
    }
  }]
};