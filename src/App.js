import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
		<Router>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Switch>
					<Route path="/resume" exact component={Home} />
					<Route path="/resume/project" component={Projects} />
					<Route path="/resume/about" component={About} />
					<Route path="/resume/cv" component={Resume} />
					<Route path="/resume/terminal" component={Terminal} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
