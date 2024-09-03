function Square({ value }) {
	return <button>{value}</button>;
}

export default function TicTacToe() {
	return (
		<div className="tic-tac-toe-container">
			<div className="row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="row">
				<Square />
				<Square />
				<Square />
			</div>
		</div>
	);
}
