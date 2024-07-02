import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [searchParam, setSearchParam] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	function handleChange(event) {
		const query = event.target.value.toLowerCase();
		setSearchParam(query);

		if (query > 1) {
		}
	}

	async function fetchListOfUsers() {
		try {
			const response = await fetch("https://dummyjson.com/users");
			const data = await response.json();
			if (data && data.users && data.users.length) {
				setUsers(data.users.map((userItem) => userItem.firstName));
				setLoading(false);
				setError(null);
			}
		} catch (error) {
			setLoading(false);
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
				name="search-user"
				placeholder="Search Users here..."
				value={searchParam}
				onChange={handleChange}
			/>
		</div>
	);
}
