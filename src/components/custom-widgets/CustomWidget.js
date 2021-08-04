import React from "react";
import PropTypes from "prop-types";
import LeftAlignImage from "./LeftAlignImage";
import RightAlignImage from "./RightAlignImage";
import ImageOnly from "./ImageOnly";
import TextOnly from "./TextOnly";

import { Row } from "reactstrap";

export class CustomWidget extends React.Component {
	getWidgetPicker(widget) {
		if (widget.type === "Image on left - Text on right") {
			return (
				<Row className="Coloured-Row">
					<LeftAlignImage {...widget} />
				</Row>
			);
		}

		if (widget.type === "Image only") {
			return (
				<Row className="Coloured-Row">
					<ImageOnly {...widget} />
				</Row>
			);
		}

		if (widget.type === "Image on right - Text on left") {
			return (
				<Row className="Coloured-Row">
					<RightAlignImage {...widget} />
				</Row>
			);
		}

		if (widget.type === "Text only") {
			return (
				<Row className="Coloured-Row">
					<TextOnly {...widget} />
				</Row>
			);
		}

		return null;
	}

	render() {
		return <>{this.getWidgetPicker(this.props)}</>;
	}
}

CustomWidget.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

export default CustomWidget;
