import { useFormContext, UseFormRegisterReturn } from "react-hook-form"

import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/ui/password-input"

import { TypographyMuted } from "../ui/typography"

export interface FieldProps extends InputProps {
	label: string
	register: UseFormRegisterReturn
}

const Field = ({ label, register, type, ...props }: FieldProps) => {
	const {
		formState: { errors },
	} = useFormContext()

	const name = register.name
	const errorMessage = errors[name]?.message?.toString()

	return (
		<div className="flex flex-col space-y-1.5">
			<Label htmlFor={name}>{label}:</Label>
			{type === "password" ? (
				<PasswordInput
					className={errorMessage ? "border-red-600" : ""}
					id={name}
					type={type}
					placeholder={label}
					{...register}
					{...props}
				/>
			) : (
				<Input
					className={errorMessage ? "border-red-600" : ""}
					id={name}
					type={type}
					placeholder={label}
					{...register}
					{...props}
				/>
			)}

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
