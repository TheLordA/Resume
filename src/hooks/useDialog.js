import { useState } from "react";

const useDialog = (state = false) => {
	const [showElement, setShowElement] = useState(state);
	const toggle = val => {
		setShowElement(typeof val === "boolean" ? val : !showElement);
	};
	return [showElement, toggle];
};

export default useDialog;
