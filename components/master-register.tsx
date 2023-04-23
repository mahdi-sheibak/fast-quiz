"use client"
import { useCallback } from "react"

import { Form } from "@/components/form/form"
import { masterSchema, Master } from "@/lib/schema"

export function MasterRegisterForm() {
  const onSubmit = useCallback((masterData: Master) => {
    console.log("masterData::", masterData)
  }, [])

  return (
    <Form<Master>
      className="grid gap-4 md:w-1/2 w-full pr-3 pl-3 md:p-0"
      onSubmit={onSubmit}
      schema={masterSchema}
    >
      <Form.Field label="Full Name" name="fullName" />
      <Form.Field label="University" name="university" />
      <Form.Field label="Email" name="email" />
      <Form.Field label="Password" name="password" />
      <Form.Submit className="w-1/2">ثبت نام</Form.Submit>
    </Form>
  )
}
