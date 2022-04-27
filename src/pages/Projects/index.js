import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//import Particle from "../Particle";
import { ProjectsCard } from "features/Projects";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const GitHubProfile = `https://api.github.com/users/thelorda/repos?sort=updated&direction=desc`;

	const fetchRepos = useCallback(async () => {
		let repoList = [];
		try {
			// getting all repos
			const response = await axios.get(GitHubProfile);
			// slicing to the length
			repoList = [...response.data.slice(0, 7)];
			// setting projectArray
			// TODO: remove the duplication.
			setProjects(repoList);
		} catch (error) {
			console.error(error.message);
		}
	}, [GitHubProfile]);

	useEffect(() => {
		fetchRepos();
	}, [fetchRepos]);

	return (
		<Container fluid className="project-section">
			{/* <Particle /> */}
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					{projects.length
						? projects.map((project, index) => (
								<Col md={4} className="project-card" key={`card-item-${index}`}>
									<ProjectsCard
										title={project.name}
										description={project.description}
										stars={project.stargazers_count}
										forks={project.forks}
										pushed_at={project.pushed_at}
										link={project.svn_url}
									/>
								</Col>
						  ))
						: null}
				</Row>
			</Container>
		</Container>
	);
};

export default Projects;
