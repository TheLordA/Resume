/* eslint-disable array-callback-return */
import React, { useState } from "react";

import Line from "@components/Terminal UI/Line";
import Cat from "@components/Terminal UI/Cat";
import Ls from "@components/Terminal UI/Ls";

import "./Terminal.css";

const Terminal = () => {
	const information = {
		commands: [
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
		],
		subDir: [
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
		],
	};

	const [displayEverything, setDisplayEverything] = useState([{ value: "", id: 0, displayInput: true, type: "line" }]);

	const handelWhatever = (string_value, Tid) => {
		let res = string_value.split(" ");
		if (res[0] === "clear") {
			setDisplayEverything([{ value: "", id: 0, displayInput: true, type: "line" }]);
		} else {
			// Remove te last ligne as input
			displayEverything.pop();
			// Add the line with the cmd
			displayEverything.push({ value: string_value, id: Tid, type: res[0] });
			// Adding a new line after a click
			setDisplayEverything([...displayEverything, { value: "", id: displayEverything.length + 1, displayInput: true, type: "line" }]);
		}
	};

	return (
		<div className="container">
			<div className="terminal">
				<p className="prompt">Hey there! Welcome to the Terminal UI version of TheLordA's resume. For basic commands type cmd</p>
				{displayEverything.map((l) => {
					if (l.type === "line") {
						return <Line key={l.id} handelWhatever={handelWhatever} line={l} displayInput={l.displayInput}></Line>;
					} else if (l.type === "ls") {
						return <Ls key={l.id} line={l} subDir={information.subDir}></Ls>;
					} else if (l.type === "cmd") {
						return <Ls key={l.id} line={l} subDir={information.commands}></Ls>;
					} else if (l.type === "cat") {
						return <Cat key={l.id} line={l}></Cat>;
					}
				})}
			</div>
		</div>
	);
};

export default Terminal;
