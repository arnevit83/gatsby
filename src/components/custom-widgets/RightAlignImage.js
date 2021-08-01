import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Row, Col } from "reactstrap";

class RightAlignImage extends React.Component {
	render() {
		return (
			<Row>
				<Col md="6">
					<p>{this.props.text}</p>
				</Col>
				<Col md="6">
					<PreviewCompatibleImage imageInfo={this.props} />
				</Col>
			</Row>
		);
	}
}

RightAlignImage.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

export default RightAlignImage;
