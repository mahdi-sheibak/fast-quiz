import { NextResponse } from "next/server"
import * as z from "zod"

import { db } from "@/lib/db"
// import { masterSchema } from "@/lib/schema"

const resolveSchemaError = (errors: z.ZodError) => {
  return errors.issues.map((issue) => ({
    felid: issue.path.join("."),
    message: issue.message,
  }))
}

const masterSchema = z.object({
  email: z.string({
    required_error: "Email is require",
  }),
  fullName: z.string({
    required_error: "FullName is require",
  }),
  password: z.string({
    required_error: "Password is require",
  }),
  university: z.string({
    required_error: "University is require",
  }),
  student: z.object({
    id: z.string({
      required_error: "Student id is require",
    }),
    title: z.string({
      required_error: "Student Title is require",
    }),
  }),
})

export const GET = () => {
  try {
    const validateMaster = masterSchema.parse({
      student: {
        id: "student id",
      },
    })
    console.log("validateMaster::", validateMaster)
  } catch (e) {
    return NextResponse.json({
      status: "GET Request with error",
      errors: resolveSchemaError(e as z.ZodError),
    })
  }

  return NextResponse.json({
    status: "GET Request",
  })
}

export const POST = async () => {
  // create a master
  console.log("im going to create a master")

  // const master = await db.master.create({
  //   data: {
  //     email: "email55555555@gmail.com",
  //     fullName: "Mahdi Family",
  //     password: "12345678",
  //     university: "MIT",
  //   },
  // })

  // console.log("master::", master)

  return NextResponse.json({
    status: "success",
    // master,
  })
}
