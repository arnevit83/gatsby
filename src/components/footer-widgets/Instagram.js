import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { Row, Col } from "reactstrap";

import Slider from "react-slick";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

class Instagram extends React.Component {
	render() {
		const Posts = this.props.data.allInstaNode.edges;
		const ig = this.props.data.markdownRemark.frontmatter.ig;

		const postLinks = Posts.map((post) => (
			<div>
				<a
					className="overtext-link"
					target="_blank"
					rel="noreferrer"
					href={"https://www.instagram.com/p/" + post.node.id}
				>
					<PreviewCompatibleImage imageInfo={post.node.localFile} />
					<div className="overtext">
						{post.node.caption.substring(0, 100)} ...
						<div>
							<sub>
								{post.node.likes != null && "Likes(" + post.node.likes + ")"}
							</sub>
							<sub>
								{post.node.comments != null &&
									"Comments(" + post.node.comments + ")"}
							</sub>
						</div>
					</div>
				</a>
			</div>
		));
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
		return (
			<Row>
				<Col>
					<div>
						<h2>@{ig}</h2>
						<Slider {...settings}>{postLinks}</Slider>
					</div>
				</Col>
			</Row>
		);
	}
}

export default () => (
	<StaticQuery
		query={graphql`
			query InstagramTemplate {
				allInstaNode(limit: 9) {
					edges {
						node {
							id
							username
							likes
							caption
							comments
							localFile {
								childImageSharp {
									fluid(quality: 70, maxWidth: 400, maxHeight: 400) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
				markdownRemark(frontmatter: { templateKey: { eq: "footersettings" } }) {
					frontmatter {
						ig
					}
				}
			}
		`}
		render={(data) => <Instagram data={data} />}
	/>
);
