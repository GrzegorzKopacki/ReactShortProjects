import { createContext, useEffect, useState } from "react";
import FeatureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
	const [loading, setLoading] = useState(false);
	const [enabledFlags, setEnabledFlags] = useState({});

	async function fetchFeaturesFlags() {
		try {
			setLoading(true);
			const response = await FeatureFlagsDataServiceCall;
			setEnabledFlags(response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			throw new Error(error);
		}
	}

	useEffect(() => {
		fetchFeaturesFlags();
	}, []);

	return (
		<FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
			{children}
		</FeatureFlagsContext.Provider>
	);
}
