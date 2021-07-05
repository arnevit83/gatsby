import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import CustomWidget from "../components/custom-widgets/CustomWidget";
import HeaderWidget from "../components/header-widgets/HeaderWidget";
import FooterWidget from "../components/footer-widgets/FooterWidget";
import Content, { HTMLContent } from "../components/Content";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

export const IndexPageTemplate = ({
	headerobject,
	//	sections,
	content,
	contentComponent,
	// footerobject
}) => {
	const PageContent = contentComponent || Content;
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
											<HeaderWidget
												key={headerobject.text}
												{...headerobject}></HeaderWidget>
											<hr />
										</Col>
										<Col xs="12">
											<PageContent className="content" content={content} />

											{/* {sections.map((section, index) => (
                  <CustomWidget key={index.toString()} {...section}></CustomWidget>
                ))} */}
											<hr />
										</Col>
										<Col xs="12">
											{/* <FooterWidget key={footerobject.text} {...footerobject}></FooterWidget> */}
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

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	heading: PropTypes.string,
	subheading: PropTypes.string,
	headerobject: PropTypes.object,
	//  footerobject: PropTypes.object,
	sections: PropTypes.array,
	contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<IndexPageTemplate
				contentComponent={HTMLContent}
				content={post.html}
				image={frontmatter.image}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				headerobject={frontmatter.headerobject}
				//  footerobject={frontmatter.footerobject}
				//sections={frontmatter.sections}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			html
			frontmatter {
				heading
				subheading
				headerobject {
					title
					description
					headerstyle
				}
				sections {
					type
					text
					image {
						childImageSharp {
							fluid(maxWidth: 2048, quality: 100) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`;
