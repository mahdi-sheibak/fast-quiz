import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { User } from "@/services/user"
import { MasterLoginForm } from "@/components/master-login"

export default function LoginMaster() {
	const login = async (userData: User) => {
		"use server"
		const user = await db.master.findFirst({
			where: {
				email: {
					equals: userData.email,
				},
				password: {
					equals: userData.password,
				},
			},
		})
		if (!user) return "اطلاعات نادرست"

		cookies().set("master", JSON.stringify(user))

		redirect("/dashboard/master")
	}

	return (
		<main className="flex h-screen items-center justify-around">
			<MasterLoginForm onSubmit={login} />
		</main>
	)
}
