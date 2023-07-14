"use server";

import { db } from "@/lib/db";

import { Student } from "@/services";

export const createStudentAction = async (studentData: Student) => {
	return await db.student.create({
		data: studentData,
	});
};
