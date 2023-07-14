"use server";

import { db } from "@/lib/db";

import { Student } from "@/services";

export const createStudentAction = (studentData: Student) => {
	return db.student.create({
		data: studentData,
	});
};
