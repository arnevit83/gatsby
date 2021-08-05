import React from "react";
import config from "../../../src/settings/SiteConfig";
import { Row, Col } from "reactstrap";

function Instagram() {
	return (
		<Row>
			<Col>
				<h4>@{config.InstagramUserName}</h4>
				<iframe
					src={config.Instagramsnapwidget}
					className="snapwidget-widget IG-Iframe"
					allowtransparency="true"
					scrolling="no"
				></iframe>
				<a
					href={"https://www.instagram.com/" + config.InstagramUserName}
					className="Lockdown"
				></a>
			</Col>
		</Row>
	);
}

export default Instagram;
