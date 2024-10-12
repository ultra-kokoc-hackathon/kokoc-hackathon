import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./newsHome.module.scss";

interface OneNews {
	id: number;
	title: string;
}

const news: OneNews[] = [
	{
		id: 1,
		title: "Заголовок для новости",
	},
	{
		id: 2,
		title: "Заголовок для новости",
	},
	{
		id: 3,
		title: "Заголовок для новости",
	},
	{
		id: 4,
		title: "Заголовок для новости",
	},
];

export const NewsHome = () => {
	return (
		<section className={styles.news}>
			<h2 className={styles.title}>Новости</h2>
			<div className={styles.news_cards}>
				{news.map(({ id, title }, index) => (
					<NewsCard key={index} id={id} title={title} />
				))}
			</div>
		</section>
	);
};
