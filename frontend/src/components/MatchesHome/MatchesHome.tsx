import { MatchCard } from "../MatchCard/MatchCard";
import styles from "./matchesHome.module.scss";

interface Match {
	id: number;
	date: string;
	league: string;
	opponent_team: string;
	stadium: string;
	city: string;
}

const matches: Match[] = [
	{
		id: 1,
		date: "12 октября, вс 12:00",
		league: "Премьер Лига",
		opponent_team: "zenith",
		stadium: "Зенит арена",
		city: "г Санкт-Петербург",
	},
	{
		id: 2,
		date: "12 октября, вс 12:00",
		league: "Премьер Лига",
		opponent_team: "zenith",
		stadium: "Зенит арена",
		city: "г Санкт-Петербург",
	},
	{
		id: 3,
		date: "12 октября, вс 12:00",
		league: "Премьер Лига",
		opponent_team: "zenith",
		stadium: "Зенит арена",
		city: "г Санкт-Петербург",
	},
];

export const MatchesHome = () => {
	return (
		<section className={styles.matches}>
			<h2 className={styles.title}>Предстоящие матчи</h2>
			<div className={styles.matches_cards}>
				{matches.map(
					(
						{ id, date, league, opponent_team, stadium, city },
						index
					) => (
						<MatchCard
							key={index}
							id={id}
							date={date}
							league={league}
							opponent_team={opponent_team}
							stadium={stadium}
							city={city}
						/>
					)
				)}
			</div>
		</section>
	);
};
