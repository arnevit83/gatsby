import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

class TagRoute extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges;
		const postLinks = posts.map((post) => (
			<tr key={post.node.fields.slug}>
				<td>
					<i className="ni ni-tag"></i>
				</td>
				<td>
					<Link to={post.node.fields.slug}>
						<h5 className="is-size-2">{post.node.frontmatter.title}</h5>
					</Link>
				</td>
			</tr>
		));
		const tag = this.props.pageContext.tag;

		const totalCount = this.props.data.allMarkdownRemark.totalCount;
		const tagHeader = `${totalCount} post${
			totalCount === 1 ? "" : "s"
		} tagged with “${tag}”`;

		return (
			<Layout>
				<section className="upper">
					<Container>
						<Row>
							<Col className="mx-auto" md="10">
								<Card className="card-invoice">
									<CardBody>
										<Row>
											<Col xs="12">
												<div className="butterfly-container">
													<span className="butterfly">
														<h1 className="text-center title">
															{`${tag}`.toUpperCase()}
															<img
																alt="butterfly"
																src="/img/ButterFlyy.svg"
															></img>
														</h1>
													</span>
													<hr />
												</div>

												<div className="container content">
													<div className="columns">
														<div
															className="column is-12"
															style={{ marginBottom: "6rem" }}
														>
															<h3 className="title is-size-4 is-bold-light">
																{tagHeader}
															</h3>
															<br></br>
															<table className="taglist">{postLinks}</table>
															<br></br>
															<p>
																<Link to="/tags/">Browse all tags</Link>
															</p>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Col>
						</Row>{" "}
						<br />
						<br />
					</Container>
				</section>
			</Layout>
		);
	}
}

export default TagRoute;

export const tagPageQuery = graphql`
	query TagPage($tag: String) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			limit: 1000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
