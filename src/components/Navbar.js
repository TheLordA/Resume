import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap/Navbar";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";

const NavBar = () => {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	const scrollHandler = () => {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	};

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
			<Container>
				<Navbar.Brand href="/resume" className="logoType" alt="brand">
					{"< TheLordA />"}
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav" style={{ flexDirection: " row-reverse" }}>
					<Nav className="ml-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: "2px" }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/resume/about" onClick={() => updateExpanded(false)}>
								<AiOutlineUser style={{ marginBottom: "2px" }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/resume/project" onClick={() => updateExpanded(false)}>
								<AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/resume/cv" onClick={() => updateExpanded(false)}>
								<CgFileDocument style={{ marginBottom: "2px" }} /> Resume
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/resume/terminal" onClick={() => updateExpanded(false)}>
								<BsTerminal style={{ marginBottom: "2px" }} /> Terminal
							</Nav.Link>
						</Nav.Item>

						{/* <Nav.Item>
							<Nav.Link
								href="#"
								target="_blank"
								rel="noreferrer"
							>
								<ImBlog style={{ marginBottom: "2px" }} /> Blogs
							</Nav.Link>
						</Nav.Item> */}

						<Nav.Item className="fork-btn">
							<Button href="https://github.com/thelorda/resume/" target="_blank" className="fork-btn-inner">
								<CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
