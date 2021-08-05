import React from "react";

import { Row, Col } from "reactstrap";

import Slider from "react-slick";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

import { useEffect, useState } from "react";

function Instagram() {
	const [Posts, setPosts] = useState([]);
	debugger;
	useEffect(() => {
		fetch(
			'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":"14531051571","first":9}',
			{
				mode: "cors", // no-cors, cors, *same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				credentials: "omit", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then(setPosts);
	}, []);

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Row>
			<Col>
				<div>
					{Posts.data && (
						<Slider {...settings}>
							{Posts.data.user.edge_owner_to_timeline_media.edges.map(
								(post) => (
									<div>
										<a
											className="overtext-link"
											target="_blank"
											rel="noreferrer"
											href={"https://www.instagram.com/p/" + post.node.id}
										>
											<PreviewCompatibleImage
												imageInfo={post.node.thumbnail_src}
											/>
											<div className="overtext">
												{post.node.edge_media_to_caption[0].node.text.substring(
													0,
													100
												)}
												...
												<div></div>
											</div>
										</a>
									</div>
								)
							)}
						</Slider>
					)}
				</div>
			</Col>
		</Row>
	);
}

export default Instagram;

//			<h2>@{ig}</h2>

/* <Slider {...settings}>{postLinks}</Slider> */

/* 			<sub>
								{post.node.likes != null && "Likes(" + post.node.likes + ")"}
							</sub>
							<sub>
								{post.node.comments != null &&
									"Comments(" + post.node.comments + ")"}
							</sub> */
