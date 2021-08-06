import React from "react";
import config from "../../../src/settings/SiteConfig";
import { Row, Col } from "reactstrap";

function Instagram() {
	return (
		<Row>
			<Col>
				<iframe
					title="IG Feed"
					src={config.Instagramsnapwidget}
					className="snapwidget-widget IG-Iframe"
					allowtransparency="true"
					scrolling="no"
				></iframe>{" "}
				<h4 className="text-center">Follow me @{config.InstagramUserName}</h4>
				<a
					id="IGFeedlink"
					href={"https://www.instagram.com/" + config.InstagramUserName}
					className="Lockdown"
				>
					&nbsp;
				</a>
			</Col>
		</Row>
	);
}

export default Instagram;
