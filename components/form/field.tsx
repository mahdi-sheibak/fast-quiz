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

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name}>{label}:</Label>
      <Input id={name} placeholder={label} {...register} {...otherProps} />
      {errors[name]?.message && (
        <TypographyMuted>{errors[name]?.message?.toString()}</TypographyMuted>
      )}
    </div>
  )
}
Field.displayName = "Field"

export { Field }
