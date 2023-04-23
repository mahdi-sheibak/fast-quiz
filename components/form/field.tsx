import React from "react"
import { useFormContext } from "react-hook-form"

import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypographyMuted } from "../ui/typography"

export interface FieldProps<T> extends Omit<InputProps, "name"> {
  name: keyof T
  label: string
}

export function Field<T>({ label, name, ...otherProps }: FieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name.toString()}>{label}:</Label>
      <Input
        id={name.toString()}
        type="text"
        placeholder={label}
        {...register(name.toString())}
        {...otherProps}
      />
      {errors[name]?.message && (
        <TypographyMuted>{errors[name]?.message?.toString()}</TypographyMuted>
      )}
    </div>
  )
}
