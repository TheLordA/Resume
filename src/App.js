import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Terminal from "./pages/Terminal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

import ScrollToTop from "./components/ScrollToTop";

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
