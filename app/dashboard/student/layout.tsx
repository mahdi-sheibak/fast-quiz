import { cookies } from "next/headers";
import {
	PresentationIcon,
	BadgePlusIcon,
	ClipboardListIcon,
} from "lucide-react";

import { TypographyH2 } from "@/components/ui/typography";
import { Sidebar, SidebarItem } from "@/components/sidebar";
import { LogoutButton } from "@/components/misc/logout-button";
import { logout } from "@/actions/logout";
import { messages } from "@/locals";

const sidebarItems: SidebarItem[] = [
	{
		href: "/dashboard/student",
		label: "لیست کلاس ها",
		icon: <PresentationIcon className="ml-2 h-4 w-4" />,
	},
	{
		href: "/dashboard/student/all-lessons",
		label: "همه کلاس ها",
		icon: <ClipboardListIcon className="ml-2 h-4 w-4" />,
	},
	{
		href: "/dashboard/student/questions",
		label: "لیست سوالات",
		icon: <ClipboardListIcon className="ml-2 h-4 w-4" />,
	},
];

export default function layout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();

	const fullName = cookieStore.get("fullName")?.value ?? "No Login";

	return (
		<div className="flex gap-3">
			<div className="hidden md:block">
				<Sidebar items={sidebarItems} />
			</div>
			<section className=" flex w-full flex-col">
				<nav className="my-10 flex items-center justify-between">
					<TypographyH2>{messages.student.dashboard.title}</TypographyH2>
					<div className="flex items-center">
						<LogoutButton title={fullName} action={logout} />
					</div>
				</nav>
				<section className="w-full">{children}</section>
			</section>
		</div>
	);
}
