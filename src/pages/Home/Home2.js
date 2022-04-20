import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "@assets/images/avatar2.svg";
import messaging from "@assets/images/massaging.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={7} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							I fell in love with programming within I have at least learned something new every day, I think… 🤷‍♂️
							<br />
							<br />I am fluent in classics like
							<i>
								<b className="purple"> Javascript, Java, and Python. </b>
							</i>
							<br />
							<br />
							Things that I feel comfortable in are <b className="purple">building new apps/features from scratch with </b>
							<b className="purple"> a personnel touch in it, </b> because why not 💪.
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
							<i>
								<b className="purple"> Modern Javascript Library and Frameworks</b>
							</i>
							&nbsp; like
							<i>
								<b className="purple"> React.js</b> and <b className="purple"> ReactNative</b>
							</i>
						</p>
					</Col>
					<Col md={5} className="myAvtar">
						{/* <Tilt> */}
						<img src={myImg} className="img-fluid" alt="avatar" />
						{/* </Tilt> */}
					</Col>
				</Row>
				<Row style={{ marginTop: "70px" }}>
					<Col md={6}>
						{/* <Tilt> */}
						<img src={messaging} className="img-fluid" alt="avatar" />
						{/* </Tilt> */}
					</Col>
					<Col md={6} className="home-about-social">
						<h1>FIND ME ON</h1>

						<ul className="home-about-social-links">
							<li className="social-icons">
								<a href="https://github.com/thelorda" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a href="https://www.linkedin.com/in/anass-ferrak/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a href="https://twitter.com/#" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
									<AiOutlineTwitter />
								</a>
							</li>

							<li className="social-icons">
								<a href="https://www.instagram.com/#" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
									<AiFillInstagram />
								</a>
							</li>
						</ul>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default Home2;
