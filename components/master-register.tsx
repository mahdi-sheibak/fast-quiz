"use client"

import { useCallback } from "react"

import { Form } from "@/components/form/form"
import { masterSchema, Master } from "@/lib/schema"

export function MasterRegisterForm() {
  const onSubmit = useCallback((master: Master) => {
    console.log("master::", master)
  }, [])

  return (
    <Form<Master>
      className="grid gap-4 md:w-1/2 w-full pr-3 pl-3 md:p-0"
      onSubmit={onSubmit}
      schema={masterSchema}
    >
      <Form.Field<Master> label="نام و نام خانوادگی" name="fullName" />
      <Form.Field<Master> label="دانشگاه" name="university" />
      <Form.Field<Master> label="ایمیل" name="email" />
      <Form.Field<Master> label="رمز عبور" name="password" />
      <Form.Submit className="w-1/2">ثبت نام</Form.Submit>
    </Form>
  )
}
