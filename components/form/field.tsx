import { UseFormRegisterReturn, useFormContext } from "react-hook-form"

import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { TypographyMuted } from "../ui/typography"

export interface FieldProps extends InputProps {
	label: string
	register: UseFormRegisterReturn
}

const Field = ({ label, register, ...props }: FieldProps) => {
	const {
		formState: { errors },
	} = useFormContext()

	const name = register.name
	const errorMessage = errors[name]?.message?.toString()

	return (
		<div className="flex flex-col space-y-1.5">
			<Label htmlFor={name}>{label}:</Label>
			<Input
				className={errorMessage ? "border-red-600" : ""}
				id={name}
				placeholder={label}
				{...register}
				{...props}
			/>
			{errorMessage && (
				<TypographyMuted className="text-red-600">
					{errorMessage}
				</TypographyMuted>
			)}
		</div>
	)
}
Field.displayName = "Field"

export { Field }
