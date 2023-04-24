import "@/styles/globals.scss"

import { clsx } from "clsx"

import { Analytics } from "@/components/analytics"
import { iranSansExtraFont } from "@/lib/fonts"
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
    <html lang="en" className={clsx("dark", iranSansExtraFont.className)}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
