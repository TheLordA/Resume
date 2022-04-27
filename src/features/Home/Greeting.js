import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import homeLogo from "assets/images/home-illus.svg";

const Greeting = () => {
	return (
		<Container fluid className="home-section" id="home">
			<Container className="home-content">
				<Row>
					<Col md={6} className="home-header">
						<h1 style={{ paddingBottom: 15 }} className="heading">
							Hi There!{" "}
							<span className="wave" role="img" aria-labelledby="wave">
								👋🏻
							</span>
						</h1>

						<h1 className="heading-name">
							I'M
							<strong className="main-name"> FERRAK ANASS</strong>
						</h1>

						<div style={{ padding: 50, textAlign: "left" }}>
							<Typewriter
								options={{
									strings: ["FullStack Developer", "Web & Mobile Software Engineer", "MERN Stack Developer", "Open Source Contributor"],
									autoStart: true,
									loop: true,
									deleteSpeed: 50,
								}}
							/>
						</div>
					</Col>

					<Col md={6} style={{ paddingBottom: 20 }}>
						<img src={homeLogo} alt="home pic" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Greeting;
