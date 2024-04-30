import { useEffect, useState } from "react";
import styles from "./LoadMoreData.module.css";

export default function LoadMoreData() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	async function fetchProducts() {
		try {
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);
			const result = await response.json();

			if (result && result.products && result.products.length) {
				setProducts((prevData) => [...prevData, ...result.products]);
				setLoading(false);
			}
		} catch (e) {}
	}

	useEffect(() => {
		fetchProducts();
	}, [count]);

	if (loading) {
		return <div>Loading data</div>;
	}

	useEffect(() => {
		if (products && products.length === 100) setDisableButton(true);
	}, [products]);

	return (
		<div className={styles.container}>
			<div className={styles.productContainer}>
				{products && products.length
					? products.map((item) => (
							<div className={styles.product} key={item.id}>
								<img src={item.thumbnail} />
								<p>{item.title}</p>
							</div>
					  ))
					: null}
			</div>
			<div className={styles.btnContainer}>
				<button disabled={disableButton} onClick={() => setCount(count + 1)}>
					Load More Products
				</button>
				{disableButton ? <p>You have reached to 100 products</p> : ""}
			</div>
		</div>
	);
}
