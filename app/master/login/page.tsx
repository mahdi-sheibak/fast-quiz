import { cookies } from "next/headers";

import { MasterLoginForm } from "@/components/master-login";
import { User } from "@/services/user";
import { redirect } from "@/lib/misc";
import { validation } from "@/locals";
import { loginMaster } from "@/actions/login";

export default function LoginMaster() {
	const login = async (userData: User) => {
		"use server";
		const user = await loginMaster(userData.email, userData.password);
		if (!user) return validation.wrong.info;

		cookies().set("type", "master");
		cookies().set("email", user.email);
		cookies().set("id", user.id);
		cookies().set("fullName", user.fullName);
		cookies().set("password", user.password);
		cookies().set("university", user.university);

		redirect("/dashboard/master");
		return null;
	};

	return (
		<main className="flex h-screen items-center justify-around">
			<MasterLoginForm onSubmit={login} />
		</main>
	);
}
