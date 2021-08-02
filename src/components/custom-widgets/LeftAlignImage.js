import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Row, Col } from "reactstrap";

class LeftAlignImage extends React.Component {
	render() {
		return (
			<Row className="row">
				<Col className="col" md="6">
					<PreviewCompatibleImage imageInfo={this.props} />
				</Col>
				<Col className="col" md="6">
					<p>{this.props.text}</p>
				</Col>
			</Row>
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
