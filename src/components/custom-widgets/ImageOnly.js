import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Col } from "reactstrap";

class ImageOnly extends React.Component {
	render() {
		return (
			<Col className="mx-auto">
				<PreviewCompatibleImage imageInfo={this.props} />
				<p className="text-center">{this.props.text}</p>
			</Col>
		);
	}
}

ImageOnly.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

export default ImageOnly;
