import { useState } from "react";
import styles from "./Accordian.module.css";
import data from "./data";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	return (
		<div className={styles.wrapper}>
			<div className={styles.accordian}>
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div key={dataItem.id} className={styles.item}>
							<div className={styles.title}>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
						</div>
					))
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
