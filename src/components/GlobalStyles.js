import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class GlobalStyles extends React.Component {
	render() {
		const data = this.props.data.markdownRemark.frontmatter;
		var style = `:root { --default: ${data.colordefault}; --primary: ${data.colorprimary}; --secondary: ${data.colorsecondary}; --font-family-sans: ${data.font}; --font-family-alt: ${data.fontalt};}`;
		var stylesheet = "";

		if (data.font === data.fontalt) {
			stylesheet = `https://fonts.googleapis.com/css2?family=${data.font}&family=Open+Sans&display=swap`;
		} else {
			stylesheet = `https://fonts.googleapis.com/css2?family=${data.font}&family=${data.fontalt}&family=Open+Sans&display=swap`;
		}

		return (
			<>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href={stylesheet} rel="stylesheet" />
				<style id="global-colours">{style}</style>
			</>
		);
	}
}

GlobalStyles.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export default () => (
	<StaticQuery
		query={graphql`
			query GlobalStyles {
				markdownRemark(frontmatter: { templateKey: { eq: "themesettings" } }) {
					html
					frontmatter {
						font
						fontalt
						colordefault
						colorprimary
						colorsecondary
					}
				}
			}
		`}
		render={(data) => <GlobalStyles data={data} />}
	/>
);
