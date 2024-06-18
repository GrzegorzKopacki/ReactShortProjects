import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightAndDarkMode from "./components/LightAndDarkMode/LightAndDarkMode";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import RandomColor from "./components/RandomColor/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import StarRating from "./components/StarRating/StarRating";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";

function App() {
	return (
		<>
			{/* <Accordian /> */}
			{/* <RandomColor /> */}
			{/* <StarRating numberOfStars={10} /> */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				page={"1"}
				limit={"10"}
			/> */}
			{/* <LoadMoreData /> */}
			{/* <TreeView menus={menus} /> */}
			{/* <QrCodeGenerator /> */}
			{/* <LightAndDarkMode/> */}
			<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
		</>
	);
}

export default App;
