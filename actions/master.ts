"use server"

import { Master } from "@/services"

import { db } from "@/lib/db"

export const createMasterAction = async (masterData: Master) => {
	"use server"
	await db.master.create({
		data: masterData,
	})
}
