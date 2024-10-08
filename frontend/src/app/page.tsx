import Image from "next/image";
import styles from "./home.module.scss";
import arrow from "../../public/icons/arrow.svg";

const HomePage = () => {
	return (
		<div className={styles.home}>
			<main className={styles.main}>
				HomePage
				<div className={styles.imgContainer}>
					<Image
						src={arrow}
						alt="arrow"
						fill
						className={styles.img}
					/>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
