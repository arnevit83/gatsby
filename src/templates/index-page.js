import React from "react";

import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import CustomWidget from "../components/custom-widgets/CustomWidget";
import HeaderSEO from "../components/header-widgets/SEOcontent";
import TitleWidget from "../components/header-widgets/TitleWidget";

import FooterWidget from "../components/footer-widgets/FooterWidget";
import Content, { HTMLContent } from "../components/Content";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

export const IndexPageTemplate = ({
	headerobject,
	sections,
	content,
	contentComponent,
	footerobjects,
	pagetitle,
}) => {
	const PageContent = contentComponent || Content;
	return (
		<>
			<HeaderSEO key={headerobject.text} {...headerobject}></HeaderSEO>
			<section className="upper">
				<Container fluid={true}>
					<Row>
						<Col className="mx-auto" md="10">
							<Card className="card-invoice">
								<CardBody>
									<Container>
										{pagetitle && <TitleWidget title={pagetitle}></TitleWidget>}

										{content !== "" && (
											<PageContent className="content" content={content} />
										)}
										{sections.map((section, index) => (
											<CustomWidget
												key={index.toString()}
												{...section}
											></CustomWidget>
										))}
										<hr />
										{footerobjects.map((Footersection, index) => (
											<FooterWidget
												key={index.toString()}
												{...Footersection}
											></FooterWidget>
										))}
									</Container>
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
	footerobjects: PropTypes.array,
	pagetitle: PropTypes.string,
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
				headerobject={frontmatter.headerobject}
				footerobjects={frontmatter.footerobjects}
				sections={frontmatter.sections}
				pagetitle={frontmatter.pagetitle}
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
				headerobject {
					title
					description
				}
				pagetitle
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
				footerobjects {
					footerstyle
				}
			}
		}
	}
`;
