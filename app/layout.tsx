import { ReactNode } from "react";
import { clsx } from "clsx";

import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { iranSansExtraFont } from "@/lib/fonts";
import { messages } from "@/messages";

import "@/styles/globals.scss";

export const metadata = {
	title: messages.home.title,
	description: messages.home.desc,
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			dir="rtl"
			className={clsx("dark", iranSansExtraFont.className, "container")}>
			<body>
				{children}
				<Toaster />
			</body>
			<Analytics />
		</html>
	);
}
