import { MatchesHome } from "@/components/MatchesHome/MatchesHome";
import styles from "./home.module.scss";

const HomePage = () => {
	return (
		<main className={styles.home}>
			<MatchesHome />
		</main>
	);
};

export default HomePage;
