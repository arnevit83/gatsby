import React from "react";
import { navigate } from "gatsby-link";
const axios = require("axios");

import Layout from "../../components/Layout";

import InstagramButton from "../../components/SocialButtons/InstagramButton";
import TwitterButton from "../../components/SocialButtons/TwitterButton";
import FacebookButton from "../../components/SocialButtons/FacebookButton";

import styles from "./index.module.css";

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import EmailButton from "../../components/SocialButtons/EmailButton";

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false, loading: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ loading: true });
		const form = e.target;
		axios({
			method: "post",
			url:
				"https://getform.io/f/098b3018-c3aa-4501-8cac-bb6b1f39dbb0?token=rVWaKMrabH1z5nqzc5QT28FNmu0bPZUzgxdF5wKhret3OIjpclv7D2N3sxCO",
			data: new FormData(form),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	render() {
		return (
			<>
				<Layout>
					<section className="upper">
						<Container>
							<Row>
								<Col className="mx-auto" md="10">
									<Card className="card-invoice">
										<div className="container">
											<div className="row ">
												<div className="col text-center">
													<br />
													<h1 className="m-4">Got a Question?</h1>
													<p>We'd like to talk more about what you need.</p>
												</div>
												<br />
												<br />
												<hr></hr>
											</div>
											<div className="row m-3 align-items-center justify-content-md-center">
												<div className="col col-lg-2 text-center">
													<TwitterButton></TwitterButton>
												</div>
												<div className="col col-lg-2 text-center">
													<FacebookButton></FacebookButton>
												</div>
												<div className="col col-lg-2 text-center">
													<InstagramButton></InstagramButton>
												</div>
												<div className="col col-lg-2 text-center">
													<EmailButton></EmailButton>
												</div>
											</div>
										</div>

										<CardBody>
											<Row>
												<Col xs="12">
													<section className="section">
														<div className="container">
															<div className="row">
																<div className="col">
																	<Card className="card-invoice">
																		<CardBody>
																			<form
																				name="contact"
																				method="post"
																				action="/contact/thanks/"
																				data-netlify="true"
																				onSubmit={this.handleSubmit}>
																				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}

																				<div className="form-group input-group">
																					<div className="input-group-prepend">
																						<span
																							htmlFor={"name"}
																							for={"name"}
																							className="input-group-text">
																							<i className="ni ni-circle-08"></i>
																						</span>
																					</div>{" "}
																					<input
																						aria-describedby="addon-right addon-left"
																						placeholder="Your Name"
																						className="form-control"
																						type="text"
																						type={"text"}
																						name={"name"}
																						onChange={this.handleChange}
																						id={"name"}
																						required={true}
																					/>{" "}
																				</div>

																				<div className="form-group input-group">
																					<div className="input-group-prepend">
																						<span
																							for={"email"}
																							htmlFor={"email"}
																							className="input-group-text">
																							<i className="ni ni-email-83"></i>
																						</span>
																					</div>{" "}
																					<input
																						aria-describedby="addon-right addon-left"
																						placeholder="Your Email"
																						className="form-control"
																						type="text"
																						type={"email"}
																						name={"email"}
																						onChange={this.handleChange}
																						id={"email"}
																						required={true}
																					/>{" "}
																				</div>
																				<div className="form-group input-group">
																					<div className="input-group-prepend">
																						<span
																							for={"message"}
																							htmlFor={"message"}
																							className={
																								styles.inputgrouptextdisable +
																								" input-group-text"
																							}>
																							<i className="ni ni-single-copy-04"></i>
																						</span>
																					</div>{" "}
																					<textarea
																						aria-describedby="addon-right addon-left"
																						placeholder="Your Message"
																						className={
																							styles.TextboxHeight +
																							" form-control"
																						}
																						type="text"
																						name={"message"}
																						onChange={this.handleChange}
																						id={"message"}
																						required={true}
																					/>{" "}
																				</div>

																				<div className="col pr-0 align-self-end">
																					<button
																						disabled={this.state.loading}
																						className="btn  float-right  btn-primary align-self-end"
																						type="submit">
																						<i
																							class={
																								!this.state.loading
																									? "ni ni-send"
																									: "ni ni-settings-gear-65 spin"
																							}></i>{" "}
																						{!this.state.loading
																							? "Send"
																							: "Submitting"}
																					</button>
																				</div>
																			</form>
																		</CardBody>
																	</Card>
																</div>
															</div>
														</div>
													</section>
												</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</section>
				</Layout>
			</>
		);
	}
}
