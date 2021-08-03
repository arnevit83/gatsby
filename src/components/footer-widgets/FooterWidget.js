import React from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";
import Instagram from "./Instagram";

class FooterWidget extends React.Component {
	getWidgetPicker(widget) {
		if (widget.footerstyle === "Instagram") {
			return <Instagram />;
		}

		if (widget.footerstyle === "Blog") {
			return <Blog />;
		}

		return null;
	}

	render() {
		return <>{this.getWidgetPicker(this.props)}</>;
	}
}

FooterWidget.propTypes = {
	data: PropTypes.shape({
		footerstyle: PropTypes.string,
	}),
};

export default FooterWidget;
