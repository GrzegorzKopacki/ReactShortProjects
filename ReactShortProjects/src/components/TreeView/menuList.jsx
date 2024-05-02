import MenuItem from "./MenuItem";
import styles from "./TreeView.module.css";

export default function MenuList({ list = [] }) {
	return (
		<ul className={styles.menulistcontainer}>
			{list && list.length
				? list.map((listItem) => <MenuItem item={listItem} />)
				: null}
		</ul>
	);
}
