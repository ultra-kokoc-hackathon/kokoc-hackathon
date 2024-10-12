import { MatchesHome } from "@/components/MatchesHome/MatchesHome";
import styles from "./home.module.scss";
import { NewsHome } from "@/components/NewsHome/NewsHome";

const HomePage = () => {
	return (
		<main className={styles.home}>
			<MatchesHome />
			<NewsHome />
		</main>
	);
};

export default HomePage;
