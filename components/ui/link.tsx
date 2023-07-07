import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

import { cn } from "@/lib/utils";

const linkVariants = cva([""], {
	variants: {
		fontSize: {
			small: ["text-sm", "font-medium"],
		},
	},
	defaultVariants: {
		fontSize: "small",
	},
});

export interface LinkProps
	extends NextLinkProps,
		VariantProps<typeof linkVariants> {
	mute?: boolean;
	underline?: boolean;
	children: ReactNode;
	className?: string;
}

const Link = ({
	className,
	children,
	fontSize,
	mute = false,
	underline = false,
	...props
}: LinkProps) => {
	return (
		<NextLink
			className={clsx(cn(linkVariants({ fontSize, className })), {
				"opacity-80 hover:opacity-100": mute,
				"underline underline-offset-4": underline,
			})}
			{...props}>
			{children}
		</NextLink>
	);
};
Link.displayName = "Link";

export { Link };
