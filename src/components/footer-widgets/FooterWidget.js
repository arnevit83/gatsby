import React from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";
import Instagram from "./Instagram";
import Discovery from "./Discovery";
import Email from "./Email";

class FooterWidget extends React.Component {
	getWidgetPicker(widget) {
		if (widget.footerstyle === "Instagram") {
			return <Instagram />;
		}

		if (widget.footerstyle === "Blog") {
			return <Blog />;
		}
		if (widget.footerstyle === "Discovery") {
			return <Discovery />;
		}
		if (widget.footerstyle === "Email") {
			return <Email />;
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
