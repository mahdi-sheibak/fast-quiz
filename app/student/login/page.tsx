import { cookies } from "next/headers";

import { StudentLoginForm } from "@/components/student-login";
import { User } from "@/services/user";
import { redirect } from "@/lib/misc";
import { validation } from "@/locals";
import { loginStudent } from "@/actions/login";

export default function LoginMaster() {
	const login = async (userData: User) => {
		"use server";
		const user = await loginStudent(userData.email, userData.password);
		if (!user) return validation.wrong.info;

		cookies().set("type", "student");
		cookies().set("email", user.email);
		cookies().set("id", user.id);
		cookies().set("fullName", user.fullName);
		cookies().set("password", user.password);
		cookies().set("university", user.university);

		redirect("/dashboard/student");
		return null;
	};

	return (
		<main className="flex h-screen items-center justify-around">
			<StudentLoginForm onSubmit={login} />
		</main>
	);
}
