import { cookies } from "next/headers";

export default function MasterDashboard() {
	const cookieStore = cookies();

	const masterId = cookieStore.get("id");

	console.log("master id::", masterId);

	return <div>Master Dashboard</div>;
}
