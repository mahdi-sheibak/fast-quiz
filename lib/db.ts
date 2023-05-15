import { Master as MasterDB, PrismaClient } from "@prisma/client"

export type { MasterDB }

const prisma = new PrismaClient()

export const db = prisma
