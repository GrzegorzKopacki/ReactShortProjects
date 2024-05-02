import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import TreeView from "./components/TreeView/TreeView";

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
			<TreeView/>
		</>
	);
}

export default App;
