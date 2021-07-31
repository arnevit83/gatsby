import React from "react";
import PropTypes from "prop-types";
import LeftAlignImage from "./LeftAlignImage";
import RightAlignImage from "./RightAlignImage";
import ImageOnly from "./ImageOnly";
import TextOnly from "./TextOnly";

export class CustomWidget extends React.Component {
	getWidgetPicker(widget) {
		if (widget.type === "Image on left - Text on right") {
			return <LeftAlignImage {...widget} />;
		}

		if (widget.type === "Image only") {
			return <ImageOnly {...widget} />;
		}

		if (widget.type === "Image on right - Text on left") {
			return <RightAlignImage {...widget} />;
		}

		if (widget.type === "Text only") {
			return <TextOnly {...widget} />;
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
