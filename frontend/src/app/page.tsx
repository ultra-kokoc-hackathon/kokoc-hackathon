import { MatchesHome } from "@/components/MatchesHome/MatchesHome";
import styles from "./home.module.scss";
import { NewsHome } from "@/components/NewsHome/NewsHome";
import Baner from "@/components/Baner/Baner";

const HomePage = () => {
	return (
		<main className={styles.home}>
			<Baner />
			<MatchesHome />
			<NewsHome />
		</main>
	);
};

export default HomePage;
