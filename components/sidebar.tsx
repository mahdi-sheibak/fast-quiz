"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PenTool } from "lucide-react";

import { LinkButton, LinkButtonProps } from "@/components/ui/link-button";

interface Link {
	href: LinkButtonProps["href"];
	label: string;
	icon: React.ReactNode;
}

const links: Link[] = [
	{
		href: "/dashboard/master/create",
		label: "ایجاد سوال",
		icon: <PenTool className="ml-2 h-4 w-4" />,
	},
	{
		href: "/dashboard/master/questions",
		label: "لیست سوالات",
		icon: <PenTool className="ml-2 h-4 w-4" />,
	},
];

const Sidebar = () => {
	const pathName = usePathname();

	return (
		<div className="flex flex-col gap-4 p-5">
			{links.map((link) => (
				<LinkButton
					key={link.label}
					href={link.href}
					variant={link.href === pathName ? "secondary" : "ghost"}
					className="w-40">
					{link.icon}
					{link.label}
				</LinkButton>
			))}
		</div>
	);
};

export { Sidebar };
