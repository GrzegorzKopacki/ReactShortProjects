import { useState } from "react";
import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ numberOfStars }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleClick(getCurrentIndex) {
		setRating(getCurrentIndex);
	}
	function handleMouseEnter(getCurrentIndex) {
		setHover(getCurrentIndex);
	}
	function handleMouseLeave() {
		setHover(rating);
	}
	return (
		<div className={styles.StarRating}>
			{[...Array(numberOfStars)].map((_, index) => {
				index += 1;
				return (
					<FaStar
						key={index}
						className={
							index <= (hover || rating) ? styles.active : styles.inActive
						}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave(index)}
						size={40}
					/>
				);
			})}
		</div>
	);
}
