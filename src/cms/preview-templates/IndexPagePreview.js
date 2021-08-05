import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();
	const entrySections = entry.getIn(["data", "sections"]);
	const sections = entrySections ? entrySections.toJS() : [];
	debugger;
	if (data) {
		return (
			<IndexPageTemplate
				headerobject={data.headerobject}
				footerobjects={data.footerobjects}
				sections={sections}
				pagetitle={data.pagetitle}
				content={widgetFor("body")}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

IndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
};

export default IndexPagePreview;
