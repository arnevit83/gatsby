/*eslint-disable*/
import React from "react";
import { Link } from "gatsby";
import GetFooterSettings from "./SiteFooterSettings";
const config = require("../../src/settings/SiteConfig");
import TwitterButton from "./SocialButtons/TwitterButton";
import FacebookButton from "./SocialButtons/FacebookButton";
import InstagramButton from "./SocialButtons/InstagramButton";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Footer() {
	const { footertitle, footerdesc } = GetFooterSettings();
	return (
		<>
			<footer className="footer">
				<Container>
					<Row className="row-grid align-items-center mb-5">
						<Col lg="6">
							<h3 className="text-primary font-weight-light mb-2">
								{footertitle}
							</h3>
							<h4 className="mb-0 font-weight-light">{footerdesc}</h4>
						</Col>
						<Col className="text-lg-center btn-wrapper" lg="6">
							<TwitterButton></TwitterButton>
							<FacebookButton></FacebookButton>
							<InstagramButton></InstagramButton>
						</Col>
					</Row>
					<hr></hr>
					<Row className="align-items-center justify-content-md-between">
						<Col md="6">
							<div className="copyright">
								{config.copyright}&nbsp;Website created by{" "}
								<a href="https://cms.sparklingpeach.co.uk" target="_blank">
									SparklingPeach
								</a>
							</div>
						</Col>
						<Col md="6">
							<ul className="nav justify-content-center">
								<li className="nav-item">
									<Link className="nav-link" to="/fandq">
										F&amp;Q
									</Link>
								</li>{" "}
								<li className="nav-item">
									<Link className="nav-link" to="/about">
										About
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
