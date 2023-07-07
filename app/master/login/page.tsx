import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { MasterLoginForm } from "@/components/master-login";
import { db } from "@/lib/db";
import { User } from "@/services/user";

export default function LoginMaster() {
	const login = async (userData: User) => {
		"use server";
		const user = await db.master.findFirst({
			where: {
				email: {
					equals: userData.email,
				},
				password: {
					equals: userData.password,
				},
			},
		});
		if (!user) return "اطلاعات نادرست";

		cookies().set("type", "master");
		cookies().set("email", user.email);
		cookies().set("id", user.id);
		cookies().set("fullName", user.fullName);
		cookies().set("password", user.password);
		cookies().set("university", user.university);

		redirect("/dashboard/master");
	};

	return (
		<main className="flex h-screen items-center justify-around">
			<MasterLoginForm onSubmit={login} />
		</main>
	);
}
