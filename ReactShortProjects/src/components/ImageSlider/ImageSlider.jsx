import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./ImageSlider.module.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchImages(getUrl) {
		try {
			setLoading(true);
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	function handlePrevious() {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	}
	function handleNext() {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	}

	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url]);

	if (loading) {
		return <div>Loading data, please wait</div>;
	}

	if (errorMsg !== null) {
		return <div>Error occured {errorMsg}</div>;
	}

	return (
		<div className={styles.container}>
			<BsArrowLeftCircleFill
				onClick={handlePrevious}
				className={`${styles.arrow} ${styles.arrowLeft}`}
			/>
			{images && images.length
				? images.map((imageItem, index) => (
						<img
							key={imageItem.id}
							src={imageItem.download_url}
							className={
								currentSlide === index
									? styles.currentImage
									: styles.hideCurrentImage
							}
						/>
				  ))
				: null}
			<BsArrowRightCircleFill
				onClick={handleNext}
				className={`${styles.arrow} ${styles.arrowRight}`}
			/>
			<span className={styles.circleIndicators}>
				{images && images.length
					? images.map((_, index) => (
							<button
								onClick={() => setCurrentSlide(index)}
								key={index}
								className={
									currentSlide === index
										? styles.currentIndicator
										: styles.hideCurrentIndicator
								}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
}
