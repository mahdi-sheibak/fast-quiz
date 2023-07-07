import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

import { ButtonProps, Button } from "./button";

interface Props extends ButtonProps {
	icon: ReactNode;
	loading?: boolean;
	children: ReactNode;
}

export const IconButton = ({ icon, loading, children, ...props }: Props) => {
	return (
		<Button {...props}>
			{loading ? <Loader2 className="infinite-rotate ml-2 h-4 w-4" /> : icon}

			<span className="mr-2">{children}</span>
		</Button>
	);
};
