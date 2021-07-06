import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();
	console.log(data);
	const entrySections = entry.getIn(["data", "sections"]);
	const sections = entrySections ? entrySections.toJS() : [];

	//   <IndexPageTemplate
	//   title={data.title}
	//   description={data.description}
	//   intro={data.intro || { blurbs: [] }}
	//   mainpitch={data.mainpitch || {}}

	//   image={getAsset(data.image)}
	//   heading={data.heading}
	//   subheading={data.subheading}
	//   footerobject={data.footerobject}
	//   headerobject={data.headerobject}
	//   sections={ sections }
	// />

	if (data) {
		return (
			<IndexPageTemplate
				title={data.title}
				description={data.description}
				footerobject={data.footerobject}
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
