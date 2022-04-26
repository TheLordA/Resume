import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./index.scss";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer__copyright">
					<h3>
						Designed and Developed by <strong className="purple">Ferrak Anass</strong>
					</h3>
				</Col>
				<Col md="4" className="footer__copyright">
					<h3>
						Copyright © {year} <strong className="purple">TheLordA</strong>
					</h3>
				</Col>
				<Col md="4" className="footer__body">
					<ul className="footer__icons">
						<li className="social-icons">
							<a href="https://github.com/thelorda" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a href="https://www.linkedin.com/in/anass-ferrak/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a href="https://twitter.com/#" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
								<AiOutlineTwitter />
							</a>
						</li>

						<li className="social-icons">
							<a href="https://www.instagram.com/#" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
