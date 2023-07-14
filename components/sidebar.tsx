"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { LinkButton, LinkButtonProps } from "@/components/ui/link-button";

export interface SidebarItem {
	href: LinkButtonProps["href"];
	label: string;
	icon: React.ReactNode;
}

interface SidebarProps {
	items: SidebarItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
	const pathName = usePathname();

	return (
		<div className="flex flex-col gap-4 p-5">
			{items.map((item) => (
				<LinkButton
					key={item.label}
					href={item.href}
					variant={item.href === pathName ? "secondary" : "ghost"}
					className="w-40 justify-start">
					{item.icon}
					{item.label}
				</LinkButton>
			))}
		</div>
	);
};

export { Sidebar };
