"use client";

import { IconButton } from "@/components/ui/icon-button";
import { useActionLoader } from "@/hooks/use-action-loader";
import { LogInIcon } from "lucide-react";

interface Props {
	action: () => Promise<void>;
}

function JoinLessonButton({ action }: Props) {
	const { onClick, loading } = useActionLoader(action);

	return (
		<IconButton
			className="w-full"
			icon={<LogInIcon />}
			loading={loading}
			onClick={onClick}>
			{"ورود"}
		</IconButton>
	);
}

export { JoinLessonButton };
