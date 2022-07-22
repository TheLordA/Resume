/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import cx from "classnames";

// Pages
import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Resume from "pages/Resume";
import Terminal from "pages/Terminal";

// Components
import { PreLoader, Footer } from "components";
import { NavBar } from "components/molecules";

// hooks
import { useDialog } from "hooks";

// Utilities
import { ScrollToTop } from "utils";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/main.scss";
import "./style.css";

const App = () => {
	const [loading, toggleLoading] = useDialog(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			toggleLoading();
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			<PreLoader load={loading} />
			<div
				className={cx("App", {
					"no-scroll": loading,
					"scroll": !loading
				})}>
				<NavBar />
				<ScrollToTop />
				<Routes>
					<Route path="/resume" element={<Home />} />
					<Route path="/resume/project" element={<Projects />} />
					<Route path="/resume/about" element={<About />} />
					<Route path="/resume/cv" element={<Resume />} />
					<Route path="/resume/terminal" element={<Terminal />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
