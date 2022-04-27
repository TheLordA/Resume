import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
//import Particle from "../Particle";
import workSpace from "assets/images/about.svg";
import work from "assets/images/workspace.svg";
import { ResumeContent } from "features/Resume";
import pdf from "assets/docs/resume(French).pdf";

const Resume = () => {
	return (
		<Container fluid className="resume-section">
			{/* <Particle /> */}
			<Container>
				<Row style={{ justifyContent: "center", position: "relative", width: "100%" }}>
					<Button variant="primary" href={pdf} target="_blank" style={{ width: " fit-content" }}>
						<AiOutlineDownload />
						&nbsp;Download CV (French version)
					</Button>
				</Row>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">Experiences</h3>
						<img src={workSpace} alt="experiences" className="img-fluid" style={{ marginBottom: "30px" }} />
						<ResumeContent
							title="
                           FullStack Software Engineer"
							company="Hightech Payment Systems ( HPS World Wide )"
							date="May 2021 - Present"
							content={["Involved in the customization and improvement of the PowerCard solution."]}
						/>
						<ResumeContent
							title="
                           FullStack JS Developer/Engineer"
							company="KEPLER Agency"
							date="Jul 2019 - Apr 2019"
							content={[
								"Head of the team that develops the new evolution of the E-learning platforms at the Moroccan market, that focus more on the right way of learning and how it should be done by making it easier, funnier for the students instead of frustrating them.",
								"Upgrade, Improvement, and Maintenance of the internal platforms of the company .",
							]}
							tools={{
								exist: true,
								dev: "Node.js ( ExpressJS ), React.js, MongoDB, WebRTC.",
								devOps: "Jenkins Docker, Kubernetes.",
								QA: "SonarQube, Mocha, Chai, Jest.",
							}}
						/>
						<ResumeContent
							title="
                            FullStack Developer Intern"
							company="IntellCap"
							date="Jul 2018 - Aug 2018"
							content={["Developing an HR platform to bring together job offers and requests and/or internships"]}
							tools={{
								exist: true,
								dev: "Java, Spring Framework (Spring Security, Spring Boot),React.js, MySql, Rest API, IntellijIdea, VS Code.",
							}}
						/>
						<ResumeContent
							title="
                            FullStack Developer Intern"
							company="DATAEmbassy"
							date="Jul 2020 - Apr 2021"
							content={["Developing a booking platform on behalf of a traveling company. "]}
							tools={{
								exist: true,
								dev: "Java, Spring Framework ( Spring Boot, Spring Security ),React.js, MySql, UX/UI design (Practices), VSCode.",
							}}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">Education</h3>
						<img src={work} alt="home pic" className="img-fluid" style={{ marginBottom: "30px" }} />
						<ResumeContent
							title="Moroccan National Higher School for Computer Science of Rabat"
							date="2017 - 2020"
							content={["Engineering Degree in Web Engineering and Mobile Computing"]}
						/>
						<ResumeContent title="MPSI/MP Preparatory classes" date="2014 - 2017" />
						<ResumeContent title="bachelor's degree in mathematical science" date="2014" />
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank" style={{ width: " fit-content" }}>
						<AiOutlineDownload />
						&nbsp;Download CV (French version)
					</Button>
				</Row>
			</Container>
		</Container>
	);
};

export default Resume;
