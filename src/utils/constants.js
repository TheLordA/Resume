/* eslint-disable import/no-anonymous-default-export */
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillInstagram, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";

//
// Navbar Elements
//
export const navBarMenu = [
	{
		title: "Home",
		url: "/resume",
		icon: AiOutlineHome
	},
	{
		title: "About",
		url: "/resume/about",
		icon: AiOutlineUser
	},
	{
		title: "Projects",
		url: "/resume/project",
		icon: AiOutlineFundProjectionScreen
	},
	{
		title: "Resume",
		url: "/resume/cv",
		icon: CgFileDocument
	},
	{
		title: "Terminal",
		url: "/resume/terminal",
		icon: BsTerminal
	}
];

//
// Footer Social Network Elements
//
export const footerSocialItems = [
	{
		title: "Github",
		url: "https://github.com/thelorda",
		icon: AiFillGithub
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/anass-ferrak/",
		icon: FaLinkedinIn
	},
	{
		title: "Twitter",
		url: "https://twitter.com/#",
		icon: AiOutlineTwitter
	},
	{
		title: "Instagram",
		url: "https://www.instagram.com/#",
		icon: AiFillInstagram
	}
];

export const githubColorTheme = {
	background: "transparent",
	text: "#ffffffb5",
	level4: "#8400b8",
	level3: "#b22ff4",
	level2: "#b265f6",
	level1: "#c084f5",
	level0: "#ecd9fc"
};

export const githubProfileLink = `https://api.github.com/users/thelorda/repos?sort=updated&direction=desc`;

export const terminalCMD = [
	{
		id: 10,
		type: "ls"
	},
	{
		id: 11,
		type: "cat"
	},
	{
		id: 12,
		type: "clear"
	},
	{
		id: 13,
		type: "cmd"
	}
];
export const terminalSubDir = [
	{
		id: 14,
		type: "About"
	},
	{
		id: 15,
		type: "Education"
	},
	{
		id: 16,
		type: "Projects"
	},
	{
		id: 17,
		type: "Contact"
	}
];

export default { githubColorTheme, githubProfileLink, terminalCMD, terminalSubDir };
