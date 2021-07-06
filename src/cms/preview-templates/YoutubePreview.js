import React from "react";

const YoutubePreview = (youtubeId, aspectRatio) => {
	return `<div class="aspect-ratio" style="--aspect-ratio: ${aspectRatio}"><iframe class="youtube-player video video--youtube" src="https://www.youtube.com/embed/${youtubeId}/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
};

export default YoutubePreview;
