import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const museo = localFont({
	src: [
		{ path: "../../public/fonts/MuseoSansCyrl-100.woff", weight: "100" },
		{ path: "../../public/fonts/MuseoSansCyrl-300.woff", weight: "300" },
		{ path: "../../public/fonts/MuseoSansCyrl-500.woff", weight: "500" },
		{ path: "../../public/fonts/MuseoSansCyrl-700.woff", weight: "700" },
		{ path: "../../public/fonts/MuseoSansCyrl-900.woff", weight: "900" },
	],
	variable: "--font-museo",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Kokoc Group",
	description: "Football Club Kokoc Group",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${museo.variable} container`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
