import { useTransition } from "react";

type Action = () => Promise<void>;

export function useActionLoader(action: Action) {
	const [isPending, startTransition] = useTransition();

	const onClick = () => startTransition(action);

	return {
		onClick,
		loading: isPending,
	};
}
