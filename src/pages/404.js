import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
const NotFoundPage = () => (
	<>
		<section className="upper">
			<Container fluid={true}>
				<Row>
					<Col className="mx-auto" md="10">
						<Card className="card-invoice">
							<CardBody>
								<Container>
									<div className="text-center">
										<br></br>
										<h4>404 Page not found</h4>
										<br />
										<Link to="/">
											&#11164;&#11164;&#11164; Back to Homepage
											&#11164;&#11164;&#11164;
										</Link>
										<br></br> <br></br>
									</div>
									<iframe
										width="100%"
										height="600px"
										src="https://www.youtube.com/embed/7wfYIMyS_dI?autoplay=1&start=6"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</Container>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	</>
);

export default NotFoundPage;
