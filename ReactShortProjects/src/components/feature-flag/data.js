const dummyApiResponse = {
	showLightAndDarkMode: false,
	showTicTacTieBoard: true,
	showRandomColorGenerator: true,
	showAccordian: false,
	showTreeView: true,
};

function FeatureFlagsDataServiceCall() {
	return new Promise((resolve, reject) => {
		if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
		else reject("Some error occured! Please try again");
	});
}

export default FeatureFlagsDataServiceCall;
