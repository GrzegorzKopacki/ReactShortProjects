import { useContext } from "react";
import Accordian from "../Accordian/Accordian";
import LightAndDarkMode from "../LightAndDarkMode/LightAndDarkMode";
import RandomColor from "../RandomColor/RandomColor";
import TicTacToe from "../TicTacToe";
import TreeView from "../TreeView/TreeView";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
	const { loading, enabledFlags } = useContext(FeatureFlagsContext);

	const componentsToRender = [
		{
			key: "showLightAndDarkMode",
			component: <LightAndDarkMode />,
		},
		{
			key: "showTicTacTieBoard",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />,
		},
		{
			key: "showAccordian",
			component: <Accordian />,
		},
		{
			key: "showTreeView",
			component: <TreeView />,
		},
	];

	function checkEnabledFlags(getCurrentKey) {
		return enabledFlags[getCurrentKey];
	}

	if (loading) return <h1>Loading data, plase wait</h1>;

	return (
		<div>
			<h1>Feature Flag</h1>
			{componentsToRender.map((componentItem) =>
				checkEnabledFlags(componentItem.key) ? componentItem.component : null
			)}
		</div>
	);
}
