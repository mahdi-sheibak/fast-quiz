"use client";

import { LogOutIcon } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";
import { useActionLoader } from "@/hooks/use-action-loader";

interface Props {
	title: string;
	action: () => Promise<void>;
}

function LogoutButton({ title, action }: Props) {
	const { onClick, loading } = useActionLoader(action);

	return (
		<IconButton
			variant="ghost"
			icon={<LogOutIcon />}
			loading={loading}
			onClick={onClick}>
			{title}
		</IconButton>
	);
}

export { LogoutButton };
