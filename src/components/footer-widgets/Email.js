import React from "react";
import { Row, Col } from "reactstrap";

import { Link } from "gatsby";

function Email() {
	return (
		<Row className="emailsignup Coloured-Row-forced">
			<Col md="8" className="mx-auto col">
				<div className="text-center">
					<h4>
						Sign up for early bird news of my events, and other news and
						offerings related to embracing childlessness
					</h4>
					<br />
					<br />
					Email signup Code
					<br />
					<br />
					<sub>
						We will process your data in accordance with our{" "}
						<Link to="/privacy">Privacy Policy</Link>. You may withdraw this
						consent at any time by emailing us at{" "}
						<a href="butterflyandbeyond@outlook.com?subject=Email concent">
							butterflyandbeyond@outlook.com
						</a>{" "}
						We use Mailchimp as our marketing platform. By clicking above to
						subscribe, you acknowledge that your information will be transferred
						to Mailchimp for processing.
						<br />
						<a
							href="https://mailchimp.com/legal/"
							rel="noreferrer"
							target="_blank"
						>
							Learn more about Mailchimp's privacy practices here
						</a>
					</sub>
				</div>
			</Col>
		</Row>
	);
}

export default Email;
