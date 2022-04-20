import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Resume from "@pages/Resume";
import Terminal from "@pages/Terminal";

// Components
import Preloader from "@components/Pre";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

const App = () => {
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
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
