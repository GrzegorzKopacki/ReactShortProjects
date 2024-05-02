import styles from "./LightAndDarkMode.module.css";
import useLocalStorage from "./useLocalStorage";

export default function LightAndDarkMode() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}
	return (
		<div className={styles.lightdarkmode} data-theme = {theme}>
			<div className={styles.container}>
				<p>Hello World!</p>
				<button onClick={handleToggleTheme}>Change Theme</button>
			</div>
		</div>
	);
}
