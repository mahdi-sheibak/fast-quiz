import { cookies } from "next/headers";

import { TypographyH2 } from "@/components/ui/typography";
import { Sidebar } from "@/components/sidebar";
import { LogoutButton } from "@/components/misc/logout-button";
import { logout } from "@/actions/logout";

export default function layout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();

	const fullName = cookieStore.get("fullName")?.value ?? "No Login";

	return (
		<div className="flex gap-3">
			<div className="hidden md:block">
				<Sidebar />
			</div>
			<section className=" flex w-full flex-col">
				<nav className="my-10 flex items-center justify-between">
					<TypographyH2>داشبورد استاد</TypographyH2>
					<div className="flex items-center">
						<LogoutButton title={fullName} action={logout} />
					</div>
				</nav>
				<section className="w-full">{children}</section>
			</section>
		</div>
	);
}
