"use client";

import { Trash2Icon } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";
import { useActionLoader } from "@/hooks/use-action-loader";

interface Props {
	action: () => Promise<void>;
}

function DeleteQuestionButton({ action }: Props) {
	const { onClick, loading } = useActionLoader(action);

	return (
		<IconButton
			variant="destructive"
			icon={<Trash2Icon />}
			loading={loading}
			onClick={onClick}>
			{"حذف سوال"}
		</IconButton>
	);
}

export { DeleteQuestionButton };
