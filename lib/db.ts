import {
	Master as MasterDB,
	PrismaClient,
	Question as QuestionDB,
} from "@prisma/client"

export type { MasterDB, QuestionDB }

const prisma = new PrismaClient()

export const db = prisma
