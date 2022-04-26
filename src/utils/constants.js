/* eslint-disable import/no-anonymous-default-export */
const githubColorTheme = {
	background: "transparent",
	text: "#ffffffb5",
	level4: "#8400b8",
	level3: "#b22ff4",
	level2: "#b265f6",
	level1: "#c084f5",
	level0: "#ecd9fc",
};

const githubProfileLink = `https://api.github.com/users/thelorda/repos?sort=updated&direction=desc`;

const terminalCMD = [
	{
		id: 10,
		type: "ls",
	},
	{
		id: 11,
		type: "cat",
	},
	{
		id: 12,
		type: "clear",
	},
	{
		id: 13,
		type: "cmd",
	},
];
const terminalSubDir = [
	{
		id: 14,
		type: "About",
	},
	{
		id: 15,
		type: "Education",
	},
	{
		id: 16,
		type: "Projects",
	},
	{
		id: 17,
		type: "Contact",
	},
];

export default { githubColorTheme, githubProfileLink, terminalCMD, terminalSubDir };
