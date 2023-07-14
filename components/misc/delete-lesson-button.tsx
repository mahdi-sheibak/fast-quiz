"use client";

import { IconButton } from "@/components/ui/icon-button";
import { useActionLoader } from "@/hooks/use-action-loader";
import { Trash2Icon } from "lucide-react";

interface Props {
	action: () => Promise<void>;
}

const DeleteLessonButton = ({ action }: Props) => {
	const { onClick, loading } = useActionLoader(action);

	return (
		<IconButton
			variant="destructive"
			className="w-32"
			icon={<Trash2Icon />}
			onClick={onClick}
			loading={loading}>
			{"حذف درس"}
		</IconButton>
	);
};

export { DeleteLessonButton };
