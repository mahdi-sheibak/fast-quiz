import React, { useCallback } from "react"
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	UseFormReturn,
} from "react-hook-form"

import { Field } from "./field"
import { Submit } from "./submit"

type FormSubmitAction<Type extends FieldValues> =
	| { onSubmit: SubmitHandler<Type>; action?: never }
	| { action: SubmitHandler<Type>; onSubmit?: never }

type FormProps<Type extends FieldValues> = {
	children: React.ReactNode
	form: UseFormReturn<Type, unknown>
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "action"> &
	FormSubmitAction<Type>

const Form = <Type extends FieldValues>({
	children,
	form,
	onSubmit,
	action,
	...props
}: FormProps<Type>) => {
	const getHandler = useCallback(() => {
		return onSubmit
			? { onSubmit: form.handleSubmit(onSubmit) }
			: { action: () => form.handleSubmit(action)() }
	}, [action, form, onSubmit])

	return (
		<FormProvider {...form}>
			<form {...getHandler()} {...props}>
				{children}
			</form>
		</FormProvider>
	)
}
Form.displayName = "Form"

Form.Field = Field
Form.Submit = Submit

export { Form }
