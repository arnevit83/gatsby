import React from "react";
import GetFooterSettings from "../SiteFooterSettings";
import { Button, UncontrolledTooltip } from "reactstrap";
export const FacebookButton = () => {
	const { facebook } = GetFooterSettings();

	return (
		<>
			<Button
				className="btn-icon-only rounded-circle"
				color="facebook"
				id="tooltip844497435"
			>
				<span className="btn-inner--icon">
					<a id="facebook" href={"https://facebook.com/" + facebook}>
						<i className="fab fa-facebook textwhite"></i>
					</a>
				</span>
			</Button>
			<UncontrolledTooltip delay={0} target="tooltip844497435">
				Like us
			</UncontrolledTooltip>
		</>
	);
};

export default FacebookButton;
