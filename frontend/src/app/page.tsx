import Image from "next/image";
import styles from "./home.module.scss";
import arrow from "../../public/icons/arrow.svg";

const HomePage = () => {
	return (
		<div className={styles.home}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src="https://nextjs.org/icons/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
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
