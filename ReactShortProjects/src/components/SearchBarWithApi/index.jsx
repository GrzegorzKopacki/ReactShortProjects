import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	async function fetchListOfUsers() {
		try {
			const response = await fetch("https://dummyjson.com/users")
            const data = await response.json()
				
		} catch (error) {
			console.log(error);
			setError(error);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);
	return (
		<div className="search-autocomplete-container">
			<input
				type="text"
				name="search-user"
				placeholder="Search Users here..."
			/>
		</div>
	);
}
