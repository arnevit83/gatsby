const config = {
	siteTitle: "Butterfly & Beyond", // Site title.
	siteRssTitle: "Butterfly & Beyond", //RSS title.
	siteTitleShort: "Butterfly & Beyond", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.

	siteDescription:
		"I am a coach and founder of Butterfly and Beyond. I have coached team members in the corporate sector for over 20 years, and now have a special interest in coaching to help childless women create fulfilling lives without children.", // Website description used for RSS feeds/meta description tag.

	siteURL: "https://butterflyandbeyond.com/", // Domain of your website without pathPrefix.
	pathPrefix: "/", // Prefixes all links.

	themeColor: "#172b4d", // Used for setting manifest and progress theme colors.
	backgroundColor: "#e0e0e0", // Used for setting manifest background color.

	GoogleAnalytics: "G-QQ3VR8Q8ZR", // Google Analytics / GA.
	GoogleAds: "", // Google Ads / Adwords / AW.
	MarketingPlatform: "", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager).
	gtagConfigOptimize_id: "OPT_CONTAINER_ID", // This object gets passed directly to the gtag config command, This config will be shared across all trackingIds.

	siteLogo: "src/img/logo.png", // Logo used for SEO and manifest.
	siteRss: "/rss.xml", // Path to the RSS file.
	siteMap: "/sitemap.xml", // Path to the Sitemap file.
	copyright: "Copyright © " + new Date().getFullYear(), // Copyright string for the footer of the website and RSS feed.

	//IG Footer setting
	InstagramUserName: "butterfly_beyond",
	Instagramsnapwidget: "https://snapwidget.com/embed/954738",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
	config.pathPrefix = "";
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteURL.substr(-1) === "/")
	config.siteURL = config.siteURL.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
	config.siteRss = `/${config.siteRss}`;

module.exports = config;
