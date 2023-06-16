import { cookies } from "next/headers"
import { Master } from "@/services"
import { LogOutIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TypographyH2 } from "@/components/ui/typography"
import { Sidebar } from "@/components/sidebar"

export default function layout({ children }: { children: React.ReactNode }) {
	const master = cookies().get("master")?.value

	const masterObject = master
		? (JSON.parse(master) as Master)
		: { fullName: "No Login" }

	return (
		<div className="flex gap-3">
			<div className="hidden md:block">
				<Sidebar />
			</div>
			<section className=" flex w-full flex-col">
				<nav className="my-10 flex items-center justify-between">
					<TypographyH2>داشبورد استاد</TypographyH2>
					<div className="flex items-center">
						<Button variant="ghost">
							<LogOutIcon />
							<span className="mr-2">{masterObject.fullName}</span>
						</Button>
					</div>
				</nav>
				<section className="w-full">{children}</section>
			</section>
		</div>
	)
}
