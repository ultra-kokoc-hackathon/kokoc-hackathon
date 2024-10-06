import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
	display: "swap",
});
const geist = localFont({
	src: "../../public/fonts/GeistVF.woff",
	variable: "--font-geist",
	weight: "100 900",
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
			<body className={`${inter.variable} ${geist.variable} container`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
