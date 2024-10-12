"use client";
import styles from "./matchCard.module.scss";
import Image from "next/image";
import vs from "/public/icons/vs.svg";
import kokoc from "/public/images/kokoc.png";
import zenith from "/public/images/zenith.png";
import { Button } from "../Button/Button";

type Props = {
	id: number;
	date: string;
	league: string;
	opponent_team: string;
	stadium: string;
	city: string;
};

export const MatchCard = ({
	id,
	date,
	league,
	opponent_team,
	stadium,
	city,
}: Props) => {
	const signUp = () => {
		console.log("signUp");
	};

	return (
		<div className={styles.card}>
			<span className={styles.date}>{date}</span>
			<span className={styles.league}>{league}</span>
			<div className={styles.rivals}>
				<div className={styles.team}>
					<Image
						src={kokoc}
						alt="kokoc"
						fill
						className={styles.img}
					/>
				</div>
				<div className={styles.vs}>
					<Image src={vs} alt="vs" fill className={styles.img} />
				</div>
				<div className={styles.team}>
					<Image
						src={zenith}
						alt="zenith"
						fill
						className={styles.img}
					/>
				</div>
			</div>
			<span className={styles.stadium}>
				{stadium},<br />
				{city}
			</span>
			<Button
				text="Записаться на матч"
				callback={signUp}
				classname="matchCard"
			/>
		</div>
	);
};
