const YoutubeCustomWidget = {
	// Internal id of the component
	id: "youtube",
	// Visible label
	label: "Youtube",
	// Fields the user need to fill out when adding an instance of the component
	fields: [
		{ name: "id", label: "YouTube ID", widget: "string" },
		{
			name: "aspect_ratio",
			label: "Aspect ratio",
			widget: "select",
			multiple: false,
			options: ["16/9", "4/3", "1/1"],
			default: "16/9",
		},
	],
	// Pattern to identify a block as being an instance of this component
	pattern: /^{{% youtube \"(\S+)\", \"(\S+)\" %}}$/,
	// Function to extract data elements from the regexp match
	fromBlock: function (match) {
		return {
			id: match[1],
			aspect_ratio: match[2],
		};
	},
	// Function to create a text block from an instance of this component
	toBlock: function (obj) {
		return `{% youtube "${obj.id}", "${obj.aspect_ratio}" %}`;
	},
	// Preview output for this component. Can either be a string or a React component
	// (component gives better render performance)
	toPreview: function (obj) {
		return (
			'<img width="100%" src="http://img.youtube.com/vi/' +
			obj.id +
			'/maxresdefault.jpg#block" alt="Youtube Video"/>'
		);
	},
};

export default YoutubeCustomWidget;
