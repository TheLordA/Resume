import React, { Fragment } from "react";

const Cat = (props) => {
	const { line } = props;
	const style = {
		align: "middle",
	};

	const information = {
		about:
			"Hi Everyone, I am FERRAK Anass, known as@TheLordA." +
			" A FullStack Software Developer, " +
			"Web & Mobile Software Engineer, " +
			"MERN Stack Developer, " +
			"Open Source Contributor.",
		education:
			"I'm a 2020 graduate of the Moroccan National Higher School for Computer Science of Rabat. I hold an Engineering degree in Web Engineering and Mobile Computing.",
		projects: [
			{
				projectName:
					"Resume - A personal static website/portfolio hosted with GitHub Pages, built to showcase my recent projects.",
				linkToGithub: "https://github.com/TheLordA/resume",
			},
			{
				projectName:
					"InstaClone - Building an Instagram web app clone using MERN Stack ( MongoDB , Express.js , React.js , Node.js ) and bring some additional features",
				linkToGithub: "https://github.com/TheLordA/Instagram-Clone",
			},
			{
				projectName:
					"Colosseum - A fully functional Netflix Clone made with MERN Stack and other technologies, check them in README for more details.",
				linkToGithub: "https://github.com/TheLordA/Colosseum",
			},
			{
				projectName:
					"Socialify - Social Media App that pleasantly brings all networking Apps features, Built with RactNative and Expo.",
				linkToGithub: "https://github.com/TheLordA/Socialify",
			},
			{
				projectName: "Discover more projects ^_^ : ",
				linkToGithub: "https://github.com/TheLordA",
			},
		],
		social: [
			{
				platform: "LinkedIn",
				link: "https://www.linkedin.com/in/anass-ferrak/",
			},
			{
				platform: "Github",
				link: "https://github.com/thelorda",
			},
		],
	};

	const handelCd = () => {
		const navigation = line.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{information.education}</p>;
			} else if (lower === "projects" || lower === "project") {
				return (
					<Fragment>
						{information.projects.map((Project) => {
							return (
								<p className="result">
									{Project.projectName}
									<a href={Project.linkToGithub} target="_blank" rel="noreferrer">
										={">"} Github Repo
									</a>
								</p>
							);
						})}
					</Fragment>
				);
			} else if (lower === "contact") {
				return (
					<Fragment>
						{information.social.map((Social, index) => {
							return (
								<p className="result" key={index}>
									<a href={Social.link} target="_blank" rel="noreferrer">
										{Social.platform}
									</a>
								</p>
							);
						})}
					</Fragment>
				);
			} else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};

	return (
		<Fragment>
			<p className="prompt"> {line.value} </p>
			{handelCd()}
		</Fragment>
	);
};
export default Cat;
