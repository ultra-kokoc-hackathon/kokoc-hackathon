import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link href="/" className={styles.link}>
				HomePage
			</Link>
			<Link href="/news" className={styles.link}>
				NewsPage
			</Link>
			<Link href="/team" className={styles.link}>
				TeamPage
			</Link>
			<Link href="/matches" className={styles.link}>
				MatchesPage
			</Link>
			<Link href="/shop" className={styles.link}>
				ShopPage
			</Link>
			<Link href="/about" className={styles.link}>
				AboutPage
			</Link>
			<Link href="/contacts" className={styles.link}>
				ContactsPage
			</Link>
		</header>
	);
};
