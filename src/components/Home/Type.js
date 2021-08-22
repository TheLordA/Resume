import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"FullStack Developer",
					"Web & Mobile Software Engineer",
					"MERN Stack Developer",
					"Open Source Contributor",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
