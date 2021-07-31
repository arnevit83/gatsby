import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();
	const entrySections = entry.getIn(["data", "sections"]);
	const sections = entrySections ? entrySections.toJS() : [];

	if (data) {
		return (
			<IndexPageTemplate
				headerobject={data.headerobject}
				sections={sections}
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
