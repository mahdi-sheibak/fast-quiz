"use client"

import React from "react"
import { useFormContext } from "react-hook-form"

import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypographyMuted } from "../ui/typography"

export interface FieldProps extends InputProps {
  name: string
  label: string
}

export function Field({ label, name, ...otherProps }: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name}>{label}:</Label>
      <Input
        id={name}
        type="text"
        placeholder={label}
        {...register(name)}
        {...otherProps}
      />
      {errors[name] && errors[name]?.message && (
        <TypographyMuted>{errors[name]?.message?.toString()}</TypographyMuted>
      )}
    </div>
  )
}
