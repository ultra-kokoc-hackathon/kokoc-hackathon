import { cookies } from "next/headers";
import { MatchesHome } from "@/components/MatchesHome/MatchesHome";
import styles from "./home.module.scss";
import { NewsHome } from "@/components/NewsHome/NewsHome";
import Baner from "@/components/Baner/Baner";

const loginData = new URLSearchParams();
loginData.append("username", "test@gmail.com");
loginData.append("password", "12345test");

async function getToken() {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: loginData,
	};

	const res = await fetch(
		"https://84.201.146.234.sslip.io/api/v1/auth/token",
		options
	);
	const data = await res.json();
	console.log(data);
	return data;
}

const HomePage = async () => {
	const token = await getToken();

	return (
		<main className={styles.home}>
			<Baner />
			<MatchesHome />
			<NewsHome />
		</main>
	);
};

export default HomePage;
