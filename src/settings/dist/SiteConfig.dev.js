"use strict";

var config = {
	siteTitle: "Your Yoga Site",
	// Site title.
	siteRssTitle: "Your Yoga Site",
	//RSS title.
	siteTitleShort: "Your Yoga Site",
	// Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteDescription: "Yoga site description.",
	// Website description used for RSS feeds/meta description tag.
	siteURL: "https://cms.sparklingpeach.co.uk/",
	// Domain of your website without pathPrefix.
	pathPrefix: "/",
	// Prefixes all links.
	themeColor: "#172b4d",
	// Used for setting manifest and progress theme colors.
	backgroundColor: "#e0e0e0",
	// Used for setting manifest background color.
	GoogleAnalytics: "G-QQ3VR8Q8ZR",
	// Google Analytics / GA.
	GoogleAds: "",
	// Google Ads / Adwords / AW.
	MarketingPlatform: "",
	// Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager).
	gtagConfigOptimize_id: "OPT_CONTAINER_ID",
	// This object gets passed directly to the gtag config command, This config will be shared across all trackingIds.
	siteLogo: "src/img/logo.png",
	// Logo used for SEO and manifest.
	siteRss: "/rss.xml",
	// Path to the RSS file.
	siteMap: "/sitemap.xml",
	// Path to the Sitemap file.
	copyright: "Copyright © " + new Date().getFullYear(), // Copyright string for the footer of the website and RSS feed.
}; // Validate
// Make sure pathPrefix is empty if not needed

if (config.pathPrefix === "/") {
	config.pathPrefix = "";
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = "/".concat(config.pathPrefix.replace(/^\/|\/$/g, ""));
} // Make sure siteURL doesn't have an ending forward slash

if (config.siteURL.substr(-1) === "/")
	config.siteURL = config.siteURL.slice(0, -1); // Make sure siteRss has a starting forward slash

if (config.siteRss && config.siteRss[0] !== "/")
	config.siteRss = "/".concat(config.siteRss);
module.exports = config;
