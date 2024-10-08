import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { Links } from "./Links/Links";
import { Button } from "./Button/Button";
import logo from "../../../public/icons/logo.svg";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link href="/" className={styles.logo}>
				<div className={styles.imgContainer}>
					<Image src={logo} alt="Logo" fill className={styles.img} />
				</div>
			</Link>
			<Links />
			<div className={styles.buttons}>
				<Button />
				<Button />
			</div>
		</header>
	);
};
