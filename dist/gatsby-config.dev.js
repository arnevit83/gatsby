"use strict";

module.exports = {
  siteMetadata: {
    title: 'Your Yoga Site',
    description: 'Yoga site description.',
    siteUrl: 'https://www.example.com'
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
  'gatsby-plugin-sitemap', {
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
  }]
};