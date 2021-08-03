import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class Instagram extends React.Component{
	render() {
	  debugger;
	  const { data } = this.props
	  const Posts = data;
	  const postLinks = Posts.map((post) => <div>{post.node.id}</div>);
	  return (
		<Row>
			<Col className="mx-auto">{postLinks}</Col>
		</Row>
		)
}}

Instagram.propTypes = {
	data: PropTypes.shape({
		allInstaNode: PropTypes.shape({
			edges: PropTypes.object,
		}),
	}),
};



export default () => (
	<StaticQuery
	  query={graphql`

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
	  `}
	  render={(data) => <Instagram data={data} />}
	/>
  )