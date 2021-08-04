import React from "react";
import PropTypes from "prop-types";

class TitleWidget extends React.Component {
	render() {
		return (
			<div className="butterfly-container">
				<span className="butterfly">
					<h1 className="text-center title">
						{this.props.title}
						<img alt="butterfly" src="/img/ButterFlyy.svg"></img>
					</h1>
				</span>
				<hr />
			</div>
		);
	}
}

TitleWidget.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
	}),
};

export default TitleWidget;
