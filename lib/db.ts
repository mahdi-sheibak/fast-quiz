import { Master } from "@/services"
import { Master as MasterDB, PrismaClient } from "@prisma/client"

export type { MasterDB }

const prisma = new PrismaClient()

export const db = prisma

export const createMaster = async (master: Master) => {
	"use server"
	await db.master.create({
		data: master,
	})
}
