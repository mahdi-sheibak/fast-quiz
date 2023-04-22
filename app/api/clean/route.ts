import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export const GET = async () => {
  console.log("clean a data")

  await db.master.deleteMany()

  NextResponse.json({
    message: "clean database",
  })
}
