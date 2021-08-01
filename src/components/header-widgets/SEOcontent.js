import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

class SEOcontent extends React.Component {
	render() {
		return (
			<Helmet>
				{this.props.title !== "" && <title>{this.props.title}</title>}
				{this.props.title !== "" && (
					<meta name="og:title" content={this.props.title} />
				)}
				{this.props.title !== "" && (
					<meta property="og:title" content={this.props.title} />
				)}
				{this.props.title !== "" && (
					<meta itemprop="name" content={this.props.title} />
				)}
				{this.props.title !== "" && (
					<meta name="twitter:title" content={this.props.title} />
				)}

				{this.props.description !== "" && (
					<meta name="description" content={this.props.description} />
				)}
				{this.props.description !== "" && (
					<meta itemprop="description" content={this.props.description} />
				)}
				{this.props.description !== "" && (
					<meta name="twitter:description" content={this.props.description} />
				)}
				{this.props.description !== "" && (
					<meta name="og:description" content={this.props.description} />
				)}
			</Helmet>
		);
	}
}

SEOcontent.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
	}),
};

export default SEOcontent;
