/*eslint-disable*/
import React from "react";
import { Link } from "gatsby";
import GetFooterSettings from "./SiteFooterSettings";
const config = require("../../src/settings/SiteConfig");
//import TwitterButton from "./SocialButtons/TwitterButton";
//import FacebookButton from "./SocialButtons/FacebookButton";
//import InstagramButton from "./SocialButtons/InstagramButton";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Footer() {
	const { footertitle, footerdesc } = GetFooterSettings();
	return (
		<>
			<footer className="footer">
				<Container>
					<Row className="row-grid mb-5">
						<Col lg="9">
							<h3 className="text-primary font-weight-light mb-2">
								{footertitle}
							</h3>
							<h6 className="mb-0 font-weight-light">{footerdesc}</h6>
						</Col>
						<Col className="text-lg-center btn-wrapper" lg="6"></Col>
					</Row>
					<hr></hr>
					<Row className="align-items-center justify-content-md-between">
						<Col lg="9">
							<sub className="hidden-mobile">
								{config.copyright}&nbsp;Website created by{" "}
								<a href="https://duncanpeach.com" target="_blank">
									SparklingPeach
								</a>
								<br />
								<br />
							</sub>
						</Col>
						<Col lg="3">
							{/* <TwitterButton></TwitterButton>
							<FacebookButton></FacebookButton>
							<InstagramButton></InstagramButton> */}{" "}
							<ul className="nav ">
								<li className="nav-item">
									<Link className="nav-link" to="/thrive">
										Thrive Coaching
									</Link>
									<Link className="nav-link" to="/inclusivity">
										Inclusivity
									</Link>{" "}
									<Link className="nav-link" to="/events">
										Events
									</Link>
								</li>

								<li className="nav-item">
									{" "}
									<Link className="nav-link" to="/about">
										About Me
									</Link>
									<Link className="nav-link" to="/contact">
										Contact
									</Link>
									<Link className="nav-link" to="/blog">
										Blog
									</Link>
									<Link className="nav-link" to="/privacy">
										Privacy
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
