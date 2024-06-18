import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator({ url }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [scrollPercentage, setScrollPercentage] = useState(0);

	async function fetchData(getUrl) {
		try {
			setLoading(true);
			const response = await fetch(getUrl);
			const data = await response.json();

			if (data && data.products && data.products.length > 0) {
				setData(data.products);
				setLoading(false);
			}
		} catch (e) {
			console.log(e);
			setErrorMessage(e.message);
		}
	}

	useEffect(() => {
		fetchData(url);
	}, [url]);

	function handleScrollPercentage() {
		const howMuchScrolled =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((howMuchScrolled / height) * 100);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	if (errorMessage) {
		return <div>Error {errorMessage}</div>;
	}

	if (loading) {
		return <div>Loading data, please wait</div>;
	}

	return (
		<div>
			<div className={styles.topContainer}>
				<h1>Custom Scroll Indicator</h1>
				<div className={styles.scrollProgress}>
					<div
						className={styles.currentProgress}
						style={{ width: `${scrollPercentage}%` }}
					></div>
				</div>
			</div>

			<div className={styles.dataContainer}>
				{data && data.length > 0
					? data.map((dataItem) => <p key={dataItem.title}>{dataItem.title}</p>)
					: null}
			</div>
		</div>
	);
}
