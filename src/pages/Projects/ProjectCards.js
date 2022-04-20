import React, { useState, useCallback, useEffect } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Skeleton from "react-loading-skeleton";
import { BiLinkExternal, BiGitRepoForked } from "react-icons/bi";
import { FiStar } from "react-icons/fi";
import { MdUpdate } from "react-icons/md";
const ProjectCards = (props) => {
	const { title, description, link, stars, forks, isBlog, pushed_at } = props;
	const [updated_at, setUpdated_at] = useState("0 mints");

	const handleUpdateTime = useCallback(() => {
		const date = new Date(pushed_at);
		const nowdate = new Date();
		const diff = nowdate.getTime() - date.getTime();
		const hours = Math.trunc(diff / 1000 / 60 / 60);

		if (hours < 24) {
			if (hours < 1) return setUpdated_at("just now");
			let measurement = hours === 1 ? "hour" : "hours";
			return setUpdated_at(`${hours.toString()} ${measurement} ago`);
		} else {
			const options = { day: "numeric", month: "long", year: "numeric" };
			const time = new Intl.DateTimeFormat("en-US", options).format(date);
			return setUpdated_at(`on ${time}`);
		}
	}, [pushed_at]);

	useEffect(() => {
		handleUpdateTime();
	}, [handleUpdateTime]);

	return (
		<Card className="project-card-view">
			<Card.Body>
				<Card.Title className="purple">{title || <Skeleton />}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
				<Card.Footer className="text-muted">
					<div style={{ "display": "grid", "gridTemplateColumns": "19% 19% 62%" }}>
						<Col>
							<FiStar style={{ color: "white", marginRight: "5px" }} />
							<span className="purple">{stars}</span>
						</Col>
						<Col>
							<BiGitRepoForked style={{ color: "white", marginRight: "5px" }} />
							<span className="purple">{forks}</span>
						</Col>
						<Col>
							<MdUpdate style={{ color: "white", marginRight: "5px" }} />
							<span className="purple">{updated_at}</span>
						</Col>
					</div>
				</Card.Footer>
				<Button variant="primary" href={link} target="_blank">
					<BiLinkExternal /> &nbsp;
					{isBlog ? "View Blog" : "View Project"}
				</Button>
			</Card.Body>
		</Card>
	);
};
export default ProjectCards;
