import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/resume(French).pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
	const [spojRank, upadteSpojRank] = useState(0);
	const [hackerrank, upadteHackerank] = useState(0);
	const [sem, upadateSem] = useState(0);
	const [cgpa, upadteCgpa] = useState(0);

	return (
		<Container fluid className="resume-section">
			{/* <Particle /> */}
			<Container>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">Experience</h3>
						<Resumecontent
							title="
                            Do dolor adipisicing aute sunt adipisicing deserunt velit ."
							date="June 2020 - August 2020"
							content={[
								"Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
								" Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
							]}
						/>
						<h3 className="resume-title">Extracurricular Activities</h3>
						<Resumecontent
							title="Ullamco excepteur nisi amet cillum."
							content={[
								"Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
							]}
						/>
						<Resumecontent
							title="Tempor cillum qui dolore elit."
							content={[
								"Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">Education</h3>
						<Resumecontent
							title="Mollit anim nostrud id duis elit tempor non exercitation ut ullamco officia est proident."
							date="2018 - Present"
							content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
						/>
						<Resumecontent
							title="Sit non enim excepteur consectetur laboris aute quis laborum ut minim."
							date="2015 - 2017"
							content={["Precentage: 88%"]}
						/>
						<Resumecontent
							title="Qui anim ad proident duis veniam laboris minim minim consectetur cillum sit reprehenderit adipisicing."
							date="2005 - 2015"
							content={["Precentage: 86%"]}
						/>
						<h3 className="resume-title">Ranks and Achivements</h3>
						<Resumecontent
							title=""
							content={[
								`Current rank in Spoj ${spojRank}`,
								`Current rank in HackerRank  ${hackerrank}`,
								"Top Performer in Code-Break 1.0",
								"Participant in Hack-A-Bit 2019",
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
};

export default Resume;
