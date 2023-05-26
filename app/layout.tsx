import "@/styles/globals.scss"
import React from "react"
import { messages } from "@/messages"
import { clsx } from "clsx"

import { iranSansExtraFont } from "@/lib/fonts"
import { Analytics } from "@/components/analytics"

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
			<body>{children}</body>
			<Analytics />
		</html>
	)
}
