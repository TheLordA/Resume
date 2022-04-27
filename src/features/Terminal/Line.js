import React, { useState } from "react";

const Line = ({ line, displayInput, handelWhatever }) => {
	const [value, setValue] = useState(line.value);

	const focusInput = (component) => {
		if (component) {
			component.focus();
		}
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handelEnter = (event) => {
		if (event.key === "Enter") {
			handelWhatever(event.target.value, line.id);
		}
	};

	const badgeChange = () => {
		let badge = "prompt ";
		badge += displayInput ? "output new-output" : "";
		return badge;
	};

	return (
		<p className={badgeChange()}>
			{displayInput && (
				<input
					type="text"
					className="here"
					ref={focusInput}
					value={value}
					onChange={handleChange}
					onKeyDown={handelEnter}
					autoFocus
				/>
			)}
			{value}
		</p>
	);
};

export default Line;
