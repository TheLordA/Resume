import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiLinux,
	SiVisualstudiocode,
	SiIntellijidea,
	SiPostman,
	SiHeroku,
	SiGooglecloud,
	SiMicrosoftazure,
	SiWindows,
} from "react-icons/si";

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiWindows />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiLinux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiIntellijidea />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			{/* Cloud Provider / Hosting */}
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGooglecloud />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftazure />
			</Col>
		</Row>
	);
};

export default Toolstack;
