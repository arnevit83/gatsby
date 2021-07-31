import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class TextOnly extends React.Component {
	render() {
		return (
			<Row>
				<Col className="mx-auto">
					<p>{this.props.text}</p>
				</Col>
			</Row>
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
