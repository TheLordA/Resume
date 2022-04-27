import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GithubCalender, AboutCard, TechStack, ToolStack } from "features/About";

import Img from "assets/images/about-ill1.svg";

const About = () => {
	return (
		<Container fluid className="about-section">
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={6}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
							Know Who <strong className="purple">I'M</strong>
						</h1>
						<AboutCard />
					</Col>
					<Col md={6} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
						<img src={Img} alt="about" className="img-fluid" />
						<p
							style={{
								marginBlockEnd: 0,
								color: "rgb(155 126 172)",
								marginTop: "1rem",
								fontSize: "1.25rem",
								fontWeight: "bold",
							}}
						>
							"Strive to build things that make a true difference !"{" "}
						</p>
						<footer className="blockquote-footer">@TheLordA</footer>
					</Col>
				</Row>
				<h1 className="project-heading">
					Professional <strong className="purple">Skillset </strong>
				</h1>

				<TechStack />

				<h1 className="project-heading">
					<strong className="purple">Tools</strong> I use
				</h1>
				<ToolStack />

				<GithubCalender />
			</Container>
		</Container>
	);
};

export default About;
