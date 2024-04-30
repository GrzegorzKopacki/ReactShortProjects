import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";

function App() {
	return (
		<>
			{/* <Accordian /> */}
			{/* <RandomColor /> */}
			<StarRating numberOfStars={10} />
		</>
	);
}

export default App;
