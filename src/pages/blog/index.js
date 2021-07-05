import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<section className="upper">
					<Container fluid={true}>
						<Row>
							<Col className="mx-auto" md="10">
								<Card className="card-invoice">
									<CardBody>
										<Row>
											<Col xs="12">
												<div
													className="full-width-image-container margin-top-0"
													style={{
														backgroundImage: `url('/img/blog-index.jpg')`,
													}}>
													<h1
														className="has-text-weight-bold is-size-1"
														style={{
															color: "white",
															padding: "1rem",
														}}>
														Latest Stories
													</h1>
												</div>
												<section className="section">
													<div className="container">
														<div className="content">
															<BlogRoll />
														</div>
													</div>
												</section>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			</Layout>
		);
	}
}
