import styles from "./LightAndDarkMode.module.css";

export default function LightAndDarkMode() {
	return (
		<div className={styles.lightdarkmode}>
			<div className={styles.container}>
				<p>Hello World!</p>
				<button>Change Theme</button>
			</div>
		</div>
	);
}
