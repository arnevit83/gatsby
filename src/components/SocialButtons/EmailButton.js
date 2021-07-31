import React from "react";
import GetFooterSettings from "../SiteFooterSettings";
import { Button, UncontrolledTooltip } from "reactstrap";

export const EmailButton = () => {
	const { facebook } = GetFooterSettings();

	return (
		<>
			<Button
				className="btn-icon-only rounded-circle"
				color="primary"
				id="tooltip844497431"
			>
				<span className="btn-inner--icon">
					<a id="emailbutton" href={"https://facebook.com/" + facebook}>
						<i className="fa fa-envelope textwhite"></i>
					</a>
				</span>
			</Button>
			<UncontrolledTooltip delay={0} target="tooltip844497431">
				Get in touch{" "}
			</UncontrolledTooltip>
		</>
	);
};

export default EmailButton;
