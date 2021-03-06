import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

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

					<Link className="btn btn-secondary btn-round" to="/thrive">
						Thrive Coaching
					</Link>

					<Link className="btn btn-secondary btn-round" to="/events">
						Events
					</Link>

					<Link className="btn btn-secondary btn-round" to="/inclusivity">
						Inclusivity
					</Link>

					<a
						className="btn btn-secondary btn-round"
						href="mailto:ButterflyandBeyond@outlook.com?subject=Book you free discovery call"
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
