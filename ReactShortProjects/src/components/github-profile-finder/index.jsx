export default function GithubProfileFinder() {
	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					name="search-by-username"
					type="text"
					placeholder="Search Github Username..."
				/>
				<button>Search</button>
			</div>
		</div>
	);
}
