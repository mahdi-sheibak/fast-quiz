"use server";

import { db } from "@/lib/db";
import { Master } from "@/services";

export const createMasterAction = async (masterData: Master) => {
	return await db.master.create({
		data: masterData,
	});
};
