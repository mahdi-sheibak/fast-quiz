import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
	const hasMaster = Boolean(cookies().get("master")?.value);

	console.log("hasLogin::", JSON.stringify(cookies().get("master")));

	hasMaster && redirect("/dashboard/master");

	!hasMaster && redirect("/");

	return <></>;
}
