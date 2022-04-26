import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
//import { GrGolang } from "react-icons/gr";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
	DiJenkins,
	DiDocker,
	DiAndroid,
} from "react-icons/di";
import { SiPostgresql, SiSpring, SiFirebase, SiKubernetes } from "react-icons/si";

const Techstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{/* Programming languages */}
			<Col xs={4} md={2} className="tech-icons">
				<FaJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			{/* Frameworks */}
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSpring />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiAndroid />
			</Col>

			{/* DB */}
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			{/* DevOps */}
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJenkins />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiKubernetes />
			</Col>
		</Row>
	);
};

export default Techstack;
