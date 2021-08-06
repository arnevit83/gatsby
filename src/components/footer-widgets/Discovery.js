import React from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import { useLocation } from "@reach/router";
// //about
function Discovery() {
	return (
		<Row className="Coloured-Row-forced">
			<Col>
				<div className="text-center">
					<h4>
						Book a free discovery call and take the first step
						<br />
						to creating a joyous present and future.
					</h4>
					<br />

					{useLocation().pathname !== "/about" && (
						<Button className="btn-round" c color="secondary">
							About Me
						</Button>
					)}
					{useLocation().pathname !== "/events" && (
						<Button className="btn-round" color="secondary">
							Events
						</Button>
					)}

					<a
						className="btn btn-secondary btn-round"
						href="mailto:ButterflyandBeyond@outlook.com?subject=FREE yoga class consultation"
						color="secondary"
					>
						<i class="far fa-calendar-alt "></i>&nbsp;&nbsp; Book your FREE
						discovery call
					</a>
				</div>
			</Col>
		</Row>
	);
}

export default Discovery;
