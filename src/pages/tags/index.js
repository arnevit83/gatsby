import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

const TagsPage = ({
	data: {
		allMarkdownRemark: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<Layout>
		<section className="upper">
			<Container>
				<Row>
					<Col className="mx-auto" md="10">
						<Card className="card-invoice">
							<CardBody>
								<Row>
									<Col xs="12">
										<Helmet title={`Tags | ${title}`} />
										<div className="container content">
											<div className="columns">
												<div
													className="column is-12"
													style={{ marginBottom: "6rem" }}
												>
													<div className="butterfly-container">
														<span className="butterfly">
															<h1 className="text-center title">
																Tags
																<img
																	alt="butterfly"
																	src="/img/ButterFlyy.svg"
																></img>
															</h1>
														</span>
														<hr />
													</div>
													<ul className="taglist">
														{group.map((tag) => (
															<li key={tag.fieldValue}>
																<Link
																	to={`/tags/${kebabCase(tag.fieldValue)}/`}
																>
																	{tag.fieldValue} ({tag.totalCount})
																</Link>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
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

export default TagsPage;

export const tagPageQuery = graphql`
	query TagsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(limit: 1000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;
