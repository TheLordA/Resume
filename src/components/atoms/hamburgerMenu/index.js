import { Navbar } from "react-bootstrap";
const HamburgerMenu = ({ onClick }) => {
	return (
		<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</Navbar.Toggle>
	);
};

export default HamburgerMenu;
