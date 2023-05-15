import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const hasLogin = cookies().get("master")?.value

	console.log("hasLogin::", JSON.stringify(cookies().get("master")))

	!hasLogin && redirect("/")

	return (
		<div>
			<span>dashboard wrapper - layout</span>
			{children}
		</div>
	)
}
