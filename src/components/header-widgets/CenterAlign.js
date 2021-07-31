import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

class CenterAlign extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className="mx-auto">
						<h1 className="text-center">{this.props.title}</h1>
						<p className="text-center">{this.props.description}</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

CenterAlign.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		headerstyle: PropTypes.string,
	}),
};

export default CenterAlign;
