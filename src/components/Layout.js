import React from "react";
import { Helmet } from "react-helmet";
//import { init } from "cookie-though";

import GetSiteSettings from "./SiteSettings";
import useSiteMetadata from "./SiteMetadata";

import GlobalStyles from "./GlobalStyles";
import { withPrefix } from "gatsby";

// Theme

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const TemplateWrapper = ({ children }) => {
	const { title, description, siteURL } = useSiteMetadata();

	const {
		fbpageid,
		twitter,
		location,
		headercolor,
		menutype,
		headerbackgroundimage,
	} = GetSiteSettings();

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix("/")}img/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>

				<meta property="og:type" content="business.business" />

				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix("/")}img/og-image.jpg`}
				/>
				<meta name="robots" content="index,follow,all" />
				<meta name="revisit-after" content="10 days" />
				<meta name="designer" content="https://sparklingpeach.co.uk" />
				{/* schema.org for Google */}
				<meta itemprop="name" content={title} />
				<meta itemprop="description" content={description} />
				<meta itemprop="image" content={`${withPrefix("/")}img/og-image.jpg`} />
				{/* Twitter  */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:site" content={twitter} />
				{/* Open Graph general (Facebook, Pinterest & Google+) */}
				<meta name="og:title" content={title} />
				<meta name="og:description" content={description} />
				<meta name="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
				<meta name="og:locale" content="en_GB" />
				<meta name="og:type" content="website" />
				<meta property="fb:page_id" content={fbpageid} />
				<meta
					name="geo.position"
					content={location.substring(0, location.indexOf("]}")).substring(31)}
				/>
				<link rel="canonical" href={siteURL} />
			</Helmet>

			<GlobalStyles />

			<Header type={menutype} />

			<div className="wrapper">
				<div className="section-shaped my-0 skew-separator skew-mini">
					<div className="page-header page-header-small header-filter ">
						<div
							className="page-header-image"
							style={{
								backgroundImage: `url(${
									!!headerbackgroundimage.childImageSharp
										? headerbackgroundimage.childImageSharp.fluid.srcWebp
										: headerbackgroundimage
								})`,
								backgroundPosition: `top left`,
								backgroundAttachment: `fixed`,
							}}
						>
							<div
								className="overlay"
								style={{
									backgroundColor: headercolor,
								}}
							></div>
						</div>
					</div>
				</div>

				{children}
				<Footer />
			</div>
		</>
	);
};

export default TemplateWrapper;
