"use client";

import { IconButton } from "@/components/ui/icon-button";
import { useActionLoader } from "@/hooks/use-action-loader";
import { LogOutIcon } from "lucide-react";

interface Props {
	action: () => Promise<void>;
}

function LeaveLessonButton({ action }: Props) {
	const { onClick, loading } = useActionLoader(action);

	return (
		<IconButton
			className="w-full"
			variant="destructive"
			icon={<LogOutIcon />}
			loading={loading}
			onClick={onClick}>
			{"خروج"}
		</IconButton>
	);
}

export { LeaveLessonButton };
