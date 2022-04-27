import React, { Fragment } from "react";

const Ls = (props) => {
	const { line, subDir } = props;
	const style = {
		listStyleType: "none",
		display: "flex",
		marginBottom: "0rem",
		justifyContent: "space-around",
	};

	return (
		<Fragment>
			<p className="prompt"> {line.type} </p>
			<ul style={style}>
				{subDir.map((l) => (
					<li key={l.id} className="result">
						{l.type}
					</li>
				))}
			</ul>
		</Fragment>
	);
};

export default Ls;
