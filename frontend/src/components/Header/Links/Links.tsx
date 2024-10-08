"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./links.module.scss";

interface Link {
	title: string;
	path: string;
}

const links: Link[] = [
	{
		title: "Новости",
		path: "/news",
	},
	{
		title: "Матчи",
		path: "/matches",
	},
	{
		title: "Команда",
		path: "/team",
	},
	{
		title: "Магазин",
		path: "/shop",
	},
	{
		title: "О клубе",
		path: "/about",
	},
	{
		title: "Болельщики",
		path: "/fans",
	},
];

export const Links = () => {
	const pathName = usePathname();

	return (
		<nav className={styles.links}>
			{links.map(({ title, path }) => (
				<Link
					key={title}
					href={path}
					className={`${styles.link} ${
						pathName === path && styles.active
					}`}
				>
					{title}
				</Link>
			))}
		</nav>
	);
};
