import { Container, Row, Col } from "react-bootstrap";

import { footerSocialItems } from "utils/constants";
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
						{footerSocialItems.map((item, index) => {
							return (
								<li key={index} className="social-icons">
									<a href={item.url} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
										<item.icon />
									</a>
								</li>
							);
						})}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
