import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

class TextOnly extends React.Component {
	render() {
		return (
			<Col className="mx-auto">
				<p>{this.props.text}</p>
			</Col>
		);
	}
}

TextOnly.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

export default TextOnly;
