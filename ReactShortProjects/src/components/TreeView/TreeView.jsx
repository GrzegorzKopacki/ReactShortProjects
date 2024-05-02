import styles from "./TreeView.module.css";
import MenuList from "./menuList";



export default function TreeView({ menus = [] }) {
	return (
		<div className={styles.appContainer}>
			<MenuList list={menus} />
		</div>
	);
}
