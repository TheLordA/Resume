import { Row, Col } from "react-bootstrap";
import myImg from "assets/images/avatar2.svg";

const SelfIntroduce = () => {
	return (
		<Row>
			<Col md={7} className="home-about-description">
				<h1 style={{ fontSize: "2.6em" }}>
					LET ME <span className="purple"> INTRODUCE </span> MYSELF
				</h1>
				<p className="home-about-body">
					I fell in love with programming within I have at least learned something new every day, I think… 🤷‍♂️
					<br />
					<br />I am fluent in classics like
					<i>
						<b className="purple"> Javascript, Java, and Python. </b>
					</i>
					<br />
					<br />
					Things that I feel comfortable in are <b className="purple">building new apps/features from scratch with </b>
					<b className="purple"> a personnel touch in it, </b> because why not 💪.
					<br />
					<br />
					Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
					<i>
						<b className="purple"> Modern Javascript Library and Frameworks</b>
					</i>
					&nbsp; like
					<i>
						<b className="purple"> React.js</b> and <b className="purple"> ReactNative</b>
					</i>
				</p>
			</Col>
			<Col md={5} className="myAvtar">
				{/* <Tilt> */}
				<img src={myImg} className="img-fluid" alt="avatar" />
				{/* </Tilt> */}
			</Col>
		</Row>
	);
};

export default SelfIntroduce;
