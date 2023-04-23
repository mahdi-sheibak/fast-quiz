import React from "react"
import {
  FormProvider,
  SubmitHandler,
  FieldValues,
  UseFormReturn,
} from "react-hook-form"

import { Field } from "./field"
import { Submit } from "./submit"

interface FormProps<Type extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: SubmitHandler<Pick<Type, keyof Type>>
  children: React.ReactNode
  form: UseFormReturn<Type, unknown>
}

const Form = <Type extends FieldValues>({
  children,
  form,
  onSubmit,
  ...otherProps
}: FormProps<Type>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...otherProps}>
        {children}
      </form>
    </FormProvider>
  )
}
Form.displayName = "Form"

Form.Field = Field
Form.Submit = Submit

export { Form }
