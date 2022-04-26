import "./index.scss";

const Pre = ({ load }) => {
	return <div className={load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
