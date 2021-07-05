import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	helmet,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<>
			<section className="upper">
				<Container fluid={true}>
					<Row>
						<Col className="mx-auto" md="10">
							<Card className="card-invoice">
								<CardBody>
									<Row>
										<Col xs="12">
											<section className="section">
												{helmet || ""}
												<div className=" ">
													<div className="column is-12">
														<div className=" is-12">
															<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
																{title}
															</h1>
															<p>{description}</p>
															<PostContent content={content} />
															{tags && tags.length ? (
																<div style={{ marginTop: `4rem` }}>
																	<h4>Tags</h4>
																	<ul className="taglist">
																		{tags.map((tag) => (
																			<li key={tag + `tag`}>
																				<Link to={`/tags/${kebabCase(tag)}/`}>
																					{tag}
																				</Link>
																			</li>
																		))}
																	</ul>
																</div>
															) : null}
														</div>
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
		</>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Blog">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
