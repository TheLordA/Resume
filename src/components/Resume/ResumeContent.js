import React, { Fragment } from "react";

const ResumeContent = (props) => {
	const { title, date, content, tools } = props;
	return (
		<div className="resume-item">
			<h5 className={title ? "resume-title" : "resume-no-title"}>{title}</h5>
			<p>
				<em>{date}</em>
			</p>

			<ul>
				{content ? content.map((value, index) => <li key={index}> ‣ {value}</li>) : null}
				{tools ? (
					<Fragment>
						<li>‣ Tools :</li>
						<ul>
							{tools.dev ? <li>- Dev : {tools.dev}</li> : null}
							{tools.devOps ? <li>- DevOps : {tools.devOps}</li> : null}
							{tools.QA ? <li>- Testing & QA : {tools.QA}</li> : null}
						</ul>
					</Fragment>
				) : null}
			</ul>
		</div>
	);
};

export default ResumeContent;
