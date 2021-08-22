import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">FERRAK Anass </span>,known as{" "}
						<span className="purple">@TheLordA</span> , from{" "}
						<span className="purple"> Marrakesh, Morocco.</span>
						<br />
						I'm a 2020 graduate of the Moroccan National Higher School for Computer Science
						of Rabat. I hold an Engineering degree in Web Engineering and Mobile Computing.
						<br />
						Besides coding, some activities that I love to do !!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Video Games
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default AboutCard;
