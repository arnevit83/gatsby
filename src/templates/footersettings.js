import React from "react";
import { graphql } from "gatsby";

export const FooterSettingsTemplate = () => {
	return <div></div>;
};
const FooterSettings = () => {
	return <div></div>;
};

export default FooterSettings;

export const FooterSettingsQuery = graphql`
	query FooterSettingsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
