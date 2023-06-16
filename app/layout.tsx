import "@/styles/globals.scss"

import React from "react"
import { clsx } from "clsx"

import { iranSansExtraFont } from "@/lib/fonts"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { messages } from "@/messages"

export const metadata = {
	title: messages.home.title,
	description: messages.home.desc,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx("dark", iranSansExtraFont.className, "container")}>
			<body>
				{children}
				<Toaster />
			</body>
			<Analytics />
		</html>
	)
}
