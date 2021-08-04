import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

export const HTMLContent = ({ content, className }) => (
	<Row xs="1" md="2">
		<Col>
			<div
				className={className}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</Col>
	</Row>
);

const Content = ({ content, className }) => (
	<Row xs="1" md="2" className="Coloured-Row">
		<Col className="mx-auto">
			<div className={className}>{content}</div>
		</Col>
	</Row>
);

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
