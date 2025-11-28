import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Ethiotel",
	description: "My Ethiotel - Telecom Services App",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
// import "./globals.css";

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "myethio-tel App",
// 	description: "Created with myethio-tel",
// 	generator: "myethio-tel.app",
// 	icons: {
// 		icon: [
// 			{
// 				url: "/icon-light-32x32.png",
// 				media: "(prefers-color-scheme: light)",
// 			},
// 			{
// 				url: "/icon-dark-32x32.png",
// 				media: "(prefers-color-scheme: dark)",
// 			},
// 			{
// 				url: "/icon.svg",
// 				type: "image/svg+xml",
// 			},
// 		],
// 		apple: "/apple-icon.png",
// 	},
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en">
// 			<body className={`font-sans antialiased`}>
// 				{children}
// 				<Analytics />
// 			</body>
// 		</html>
// 	);
// }
