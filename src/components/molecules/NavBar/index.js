import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

import { HamburgerMenu } from "components/atoms";

import { useDialog } from "hooks";
import { navBarMenu } from "utils/constants";

import "./index.scss";

const NavBar = () => {
	const [expandMenu, toggleExpandMenu] = useDialog();
	const [navbarStickiness, updateNavbar] = useState(false);

	const scrollHandler = () => {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	};

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar expanded={expandMenu} fixed="top" expand="md" className={navbarStickiness ? "sticky" : "navbar"}>
			<Container>
				<Navbar.Brand href="/resume" className="logoType" alt="brand">
					{"< TheLordA />"}
				</Navbar.Brand>
				{/* Menu icon that's visible on mobile devices */}
				<HamburgerMenu
					onClick={() => {
						toggleExpandMenu();
					}}
				/>
				<Navbar.Collapse id="responsive-navbar-nav" style={{ flexDirection: " row-reverse" }}>
					<Nav className="ml-auto" defaultActiveKey="#home">
						{/* Different menu elements */}
						{navBarMenu.map((element, index) => {
							return (
								<Nav.Item key={index}>
									<Nav.Link as={Link} to={element.url} onClick={() => toggleExpandMenu()}>
										<element.icon style={{ marginBottom: "2px" }} /> {element.title}
									</Nav.Link>
								</Nav.Item>
							);
						})}
						{/* Special element : fork project button */}
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
