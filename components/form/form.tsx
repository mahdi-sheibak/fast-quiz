import React from "react"
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Field } from "./field"
import { Submit } from "./submit"

interface FormProps<Type>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: SubmitHandler<Pick<Type, keyof Type>>
  children: React.ReactNode
  schema: z.Schema<Type>
}

export function Form<Type extends FieldValues>({
  children,
  onSubmit,
  schema,
  ...otherProps
}: FormProps<Type>) {
  const form = useForm<Type>({
    resolver: zodResolver(schema),
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...otherProps}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Field = Field
Form.Submit = Submit
