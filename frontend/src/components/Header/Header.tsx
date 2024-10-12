"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { Links } from "./Links/Links";
import { Button } from "../Button/Button";
import logo from "/public/icons/logo.svg";

export const Header = () => {
	const login = () => {
		console.log("login");
	};
	const register = () => {
		console.log("register");
	};

	return (
		<header className={styles.header}>
			<Link href="/" className={styles.logo}>
				<div className={styles.imgContainer}>
					<Image src={logo} alt="Logo" fill className={styles.img} />
				</div>
			</Link>
			<Links />
			<div className={styles.buttons}>
				<Button text="Войти" callback={login} classname="header" />
				<Button
					text="Регистрация"
					callback={register}
					classname="header"
				/>
			</div>
		</header>
	);
};
