import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Col } from "reactstrap";

class RightAlignImage extends React.Component {
	render() {
		return (
			<>
				<Col className="order-md-2" md="6">
					<PreviewCompatibleImage imageInfo={this.props} />
				</Col>
				<Col className="order-md-1" md="6">
					<p>{this.props.text}</p>
				</Col>
			</>
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
