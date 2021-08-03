import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

class Blog extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		const postLinks = posts.map(({ node: post }) => (
			<div key={post.id}>
				<article
					className={`blog-list-item tile is-child box notification ${
						post.frontmatter.featuredpost ? "is-featured" : ""
					}`}
				>
					<header>
						{post.frontmatter.featuredimage ? (
							<div className="featured-thumbnail">
								<Link className="button" to={post.fields.slug}>
									<PreviewCompatibleImage
										imageInfo={{
											image: post.frontmatter.featuredimage,
											alt: `featured image thumbnail for post ${post.frontmatter.title}`,
										}}
									/>{" "}
								</Link>
							</div>
						) : null}
						<p className="post-meta">
							<br />
							<Link
								className="title has-text-primary is-size-4"
								to={post.fields.slug}
							>
								{post.frontmatter.title}
							</Link>
						</p>
					</header>
					<br />
					<p>
						{post.excerpt}
						<br />
						<br />
						<Link className="button" to={post.fields.slug}>
							Keep Reading →
						</Link>
					</p>
				</article>
			</div>
		));

		return (
			<Row>
				<Col>
					<Slider {...settings}>{postLinks}</Slider>
				</Col>
			</Row>
		);
	}
}

Blog.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 300)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <Blog data={data} count={count} />}
	/>
);
