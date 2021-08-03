import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

export const Instagram = ({ data }) => {
	const Posts = data;
	debugger;
	const postLinks = Posts.map((post) => <div>{post.node.id}</div>);

	return (
		<Row>
			<Col className="mx-auto">{postLinks}</Col>
		</Row>
	);
};

export default Instagram;

Instagram.propTypes = {
	data: PropTypes.shape({
		allInstaNode: PropTypes.shape({
			edges: PropTypes.object,
		}),
	}),
};

export const pageQuery = graphql`
	{
		allInstaNode {
			edges {
				node {
					id
					username
					likes
					caption
					comments
					localFile {
						childImageSharp {
							fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`;
