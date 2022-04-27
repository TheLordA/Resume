import { Container } from "react-bootstrap";
import { Greeting, SelfIntroduce, Contact } from "features/Home";

const Home = () => {
	return (
		<section>
			<Greeting />
			<Container fluid className="home-about-section" id="about">
				<Container>
					<SelfIntroduce />
					<Contact />
				</Container>
			</Container>
		</section>
	);
};

export default Home;
