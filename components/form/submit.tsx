import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";

export type SubmitProps = ButtonProps;

const Submit = ({ children, ...props }: SubmitProps) => {
	const {
		formState: { isSubmitting },
	} = useFormContext();

	return (
		<Button {...props} type="submit">
			{isSubmitting && <Loader2 className="ml-2 h-4 w-4 infinite-rotate" />}
			{children}
		</Button>
	);
};
Submit.displayName = "Submit";

export { Submit };
