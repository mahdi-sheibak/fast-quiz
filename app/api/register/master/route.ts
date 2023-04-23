import { NextResponse, NextRequest } from "next/server"
import { z } from "zod"

import { db } from "@/lib/db"
import { masterSchema } from "@/lib/schema"

const resolveSchemaError = (errors: z.ZodError) => {
  return errors.issues.map((issue) => ({
    felid: issue.path.join("."),
    message: issue.message,
  }))
}

export const GET = async () => {
  try {
    const masters = await db.master.findMany()
    return NextResponse.json({
      status: "Masters",
      masters,
    })
  } catch (error) {
    return NextResponse.json({
      status: "Error Masters",
      error,
    })
  }
}

export const POST = async (request: NextRequest) => {
  let body = null

  try {
    body = await request.json()
  } catch (e) {
    body = null
  }

  try {
    const validateMaster = masterSchema.parse(body)
    const master = await db.master.create({
      data: validateMaster,
    })

    return NextResponse.json({
      status: "success",
      master,
    })
  } catch (e) {
    return NextResponse.json({
      status: "Error",
      error: resolveSchemaError(e as z.ZodError),
    })
  }
}
