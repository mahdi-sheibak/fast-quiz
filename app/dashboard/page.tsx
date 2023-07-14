import { cookies } from "next/headers";

import { redirect } from "@/lib/misc";

export default function Dashboard() {
	const loginType = cookies().get("type")?.value;

	!loginType && redirect("/");

	Boolean(loginType === "master") && redirect("/dashboard/master");

	Boolean(loginType === "student") && redirect("/dashboard/student");

	return <></>;
}
