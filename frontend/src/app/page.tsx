import styles from "./home.module.scss";
// import Image from "next/image";
// import arrow from "../../public/icons/arrow.svg";
import Baner from '@/components/Baner/Baner';

const HomePage = () => {
	return (
		<div className={styles.home}>
			<main className={styles.main}>
				<Baner />
				{/* HomePage */}
				{/* <div className={styles.imgContainer}>
					<Image
						src={arrow}
						alt="arrow"
						fill
						className={styles.img}
					/>
				</div> */}
			</main>
		</div>
	);
};

export default HomePage;
