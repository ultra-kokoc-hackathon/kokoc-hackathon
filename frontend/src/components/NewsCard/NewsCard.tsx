import styles from "./newsCard.module.scss";
import Link from "next/link";

type Props = { id: number; title: string };

export const NewsCard = ({ id, title }: Props) => {
	return (
		<Link href="/news" className={styles.link}>
			<div className={styles.news}>
				<div className={styles.text}>{title}</div>
			</div>
		</Link>
	);
};
