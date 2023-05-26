import { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button"
import { Link, LinkProps } from "./link"

export interface LinkButtonProps
	extends VariantProps<typeof buttonVariants>,
		LinkProps {}

const LinkButton = ({
	className,
	variant,
	size,
	...props
}: LinkButtonProps) => {
	return (
		<Link
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}
LinkButton.displayName = "LinkButton"

export { LinkButton }
