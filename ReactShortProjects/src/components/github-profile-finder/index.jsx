import { useEffect, useState } from "react";
import { TbArrowWaveLeftDown } from "react-icons/tb";

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState("GrzegorzKopacki");

	async function fetchGitHubUserData() {
		const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json()

        console.log(data)
	}

	useEffect(() => {
		fetchGitHubUserData();
	}, []);

	function handleSubmit() {}

	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					name="search-by-username"
					type="text"
					placeholder="Search Github Username..."
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
		</div>
	);
}
