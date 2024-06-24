export default function Modal({ id }) {
	return (
		<div id={id || "Modal"} className="modal">
			<div className="content">
				<div className="header"></div>
				<div className="body"></div>
				<div className="footer"></div>
			</div>
		</div>
	);
}
