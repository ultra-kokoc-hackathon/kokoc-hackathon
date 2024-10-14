import styles from "./matches.module.scss";

interface Match {
	id: string;
	opponent_team: string;
	date: string;
	result: string;
	stadium: string;
}

interface MatchesProps {
	data: Match[];
}

const getMatches = async () => {
	const response = await fetch(
		"https://84.201.146.234.sslip.io/api/v1/match",
		{
			method: "GET",
			cache: "no-store",
		}
	);

	return response.json();
};

const MatchesPage = async () => {
	const { matches } = await getMatches();
	//console.log(matches);

	return (
		<div className={styles.matches}>
			{/* {matches.map((match: Match) => (
				<div key={match.id}>
					<p>{match.opponent_team}</p>
					<p>{match.date}</p>
					<p>{match.result}</p>
					<p>{match.stadium}</p>
				</div>
			))} */}
		</div>
	);
};

export default MatchesPage;
