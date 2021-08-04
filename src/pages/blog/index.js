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
										<div className="butterfly-container">
											<span className="butterfly">
												<h1 className="text-center title">
													Latest Stories
													<img alt="butterfly" src="/img/ButterFlyy.svg"></img>
												</h1>
											</span>
											<hr />
										</div>
										<BlogRoll />
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
