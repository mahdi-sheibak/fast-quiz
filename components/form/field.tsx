import React from "react"
import { UseFormRegisterReturn, useFormContext } from "react-hook-form"

import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypographyMuted } from "../ui/typography"

export interface FieldProps extends InputProps {
  label: string
  register: UseFormRegisterReturn<string>
}

const Field = ({ label, register, ...otherProps }: FieldProps) => {
  const {
    formState: { errors },
  } = useFormContext()

  const name = register.name
  const errorMessage = errors[name]?.message

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name}>{label}:</Label>
      <Input
        className={errorMessage ? "border-red-600" : ""}
        id={name}
        placeholder={label}
        {...register}
        {...otherProps}
      />
      {errorMessage && (
        <TypographyMuted className="text-red-600">
          {errorMessage?.toString()}
        </TypographyMuted>
      )}
    </div>
  )
}
Field.displayName = "Field"

export { Field }
