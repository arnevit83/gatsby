import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Col } from "reactstrap";
var unified = require("unified");
var remarkParse = require("remark-parse");
var remarkRehype = require("remark-rehype");
var rehypeStringify = require("rehype-stringify");

class LeftAlignImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { htmlcontent: "" };
		unified()
			.use(remarkParse) // Parse markdown content to a syntax tree
			.use(remarkRehype, { allowDangerousHtml: true }) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
			.use(rehypeStringify, { allowDangerousHtml: true }) // Serialize HTML syntax tree
			.process(this.props.text)
			.then((file) => this.setState({ htmlcontent: String(file) }));
	}

	render() {
		//this.props.text

		return (
			<>
				<Col className="order-md-1" md="6">
					<PreviewCompatibleImage imageInfo={this.props} />
				</Col>
				<Col className="order-md-2" md="6">
					<div dangerouslySetInnerHTML={{ __html: this.state.htmlcontent }} />
				</Col>
			</>
		);
	}
}

LeftAlignImage.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

export default LeftAlignImage;
