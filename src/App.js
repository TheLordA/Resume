import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";

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
		<Router>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/project" component={Projects} />
					<Route path="/about" component={About} />
					<Route path="/cv" component={Resume} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
