import { useState } from "react";
import styles from "./Accordian.module.css";
import data from "./data";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSingleSelection(getCurrentId) {
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}
	function handleMultiSelection(getCurrentId) {
		let cpyMultiple = [...multiple];
		const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

		if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
		else cpyMultiple.splice(findIndexOfCurrentId, 1);

		setMultiple(cpyMultiple);
	}

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => setEnableMultiSelection(!enableMultiSelection)}
				className={styles.MultiSelectionButton}
			>
				Enable Multi Selection
			</button>
			<div className={styles.accordian}>
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div key={dataItem.id} className={styles.item}>
							<div
								onClick={
									enableMultiSelection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								className={styles.title}
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enableMultiSelection
								? multiple.indexOf(dataItem.id) !== -1 && (
										<div className={styles.answer}>{dataItem.answer}</div>
								  )
								: selected === dataItem.id && (
										<div className={styles.answer}>{dataItem.answer}</div>
								  )}
						</div>
					))
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
