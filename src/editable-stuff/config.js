// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
	firstName: "Anass",
	middleName: "",
	lastName: "Ferrak",
	letterCrap: true,
	message:
		" | Engineer | Programmer | Web Developer | Athlete | Fascinated by New Techs | Addicted to Learning How Stuffs Works |",
	icons: [
		{
			image: "fa-github",
			url: "https://github.com/thelorda",
		},
		{
			image: "fa-linkedin",
			url: "https://www.linkedin.com/in/anass-ferrak/",
		},
		{
			image: "fa-facebook",
			url: "https://www.facebook.com/AnassFerrak",
		},
		{
			image: "fa-instagram",
			url: "#",
		},
		{
			image: "fa-twitter",
			url: "#",
		},
	],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
	show: true,
	heading: "About Me",
	imageLink: require("../editable-stuff/anassFerrak.png"),
	imageSize: 375,
	message:
		"My name is Ferrak Anass known as @TheLordA. I’m a graduate of 2020 from National Higher School of Informatics and Systems Analysis (ENSIAS) at Rabat, Morocco with a degree in Computer Engineering specialist in Web Engineering and Mobile Computing. I see myself as a FullStack JS Engineer and Web Developer. In my free time I like working on open source projects and learning new things. ",
	resume: require("../editable-stuff/resume(French).pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
	show: true,
	heading: "Recent Projects",
	gitHubUsername: "thelorda", //i.e."johnDoe12Gh"
	reposLength: 6,
	specificRepos: [],
};

// Leadership SECTION
// Disabled for now
const leadership = {
	show: false,
	heading: "Leadership",
	message:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
	images: [
		{ img: require("../editable-stuff/anassFerrak.png") },
		{ img: require("../editable-stuff/anassFerrak.png") },
	],
	imageSize: {
		width: "615",
		height: "450",
	},
};

// SKILLS SECTION
const skills = {
	show: true,
	heading: "Skills",
	hardSkills: [
		// Programming Languages
		{
			type: "Programming Languages",
			value: [
				{ name: "Javascript", value: 90 },
				{ name: "Go", value: 65 },
				{ name: "Python", value: 65 },
				{ name: "Java", value: 75 },
			],
		},
		// Web Development
		{
			type: "Web Development",
			value: [
				{ name: "React.js", value: 90 },
				{ name: "Next.js", value: 25 },
				{ name: "Node.js", value: 85 },
				{ name: "Express.js", value: 85 },
				{ name: "Nest.js", value: 20 },
				{ name: "Java EE (JSF, JSP)", value: 45 },
				{ name: "Spring FrameWork", value: 50 },
			],
		},
		// Mobile Development
		{
			type: "Mobile Development",
			value: [
				{ name: "ReactNative", value: 75 },
				{ name: "Android ( Kotlin )", value: 35 },
				{ name: "Android ( Java )", value: 80 },
			],
		},
		// DevOps
		{
			type: "DevOps",
			value: [
				{ name: "Git", value: 90 },
				{ name: "GitHub", value: 85 },
				{ name: "GitLab", value: 85 },
				{ name: "Jenkins", value: 65 },
				{ name: "Docker", value: 55 },
				{ name: "Kubernetes", value: 55 },
			],
		},
		// DataBases
		{
			type: "DataBases",
			value: [
				{ name: "MongoDB", value: 90 },
				{ name: "MySQL", value: 90 },
				{ name: "Postgresql", value: 80 },
				{ name: "Oracle", value: 55 },
				{ name: "SQL Server", value: 45 },
				{ name: "FireBase Databases ( Real-time Database, Cloud Firestore )", value: 75 },
			],
		},
		// Web Services
		{
			type: "Web Services",
			value: [
				{ name: "REST", value: 90 },
				{ name: "GraphQL", value: 75 },
				{ name: "WebSockets", value: 85 },
			],
		},
		// Testing & QA
		{
			type: "Testing & QA",
			value: [
				{ name: "SonarQube", value: 70 },
				{ name: "PostMan", value: 85 },
				{ name: "Mocha & Chai", value: 55 },
				{ name: "Jest", value: 45 },
				{ name: "BugZilla", value: 60 },
				{ name: "Espresso", value: 35 },
				{ name: "JUnit", value: 40 },
				{ name: "Selenium", value: 45 },
				{ name: "JUnit", value: 40 },
				{ name: "JArchitect", value: 35 },
			],
		},
		// Cloud Platforms
		{
			type: "Cloud Platforms",
			value: [
				{ name: "Google Cloud Platform", value: 75 },
				{ name: "Microsoft Azure", value: 70 },
				{ name: "Amazon Web Services", value: 55 },
			],
		},
		// Systems Administrations
		{
			type: "Systems Administrations",

			value: [
				{ name: "Linux (Ubuntu/CentOs)", value: 65 },
				{ name: "Windows", value: 65 },
			],
		},
	],
	softSkills: [
		{ name: "Goal-Oriented", value: 80 },
		{ name: "Collaboration", value: 90 },
		{ name: "Positivity", value: 75 },
		{ name: "Adaptability", value: 85 },
		{ name: "Problem Solving", value: 75 },
		{ name: "Empathy", value: 90 },
		{ name: "Organization", value: 70 },
		{ name: "Creativity", value: 90 },
	],
};

// GET IN TOUCH SECTION
const getInTouch = {
	show: true,
	heading: "Get In Touch",
	message:
		"I'm currently looking for full-time Software Engineering / FullStack JS Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
	email: "ferrak.anass@gmail.com",
};

// Coming Soon
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
