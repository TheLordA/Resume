import { Row, Col } from "react-bootstrap";
import messaging from "assets/images/massaging.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
	return (
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
	);
};

export default Contact;
