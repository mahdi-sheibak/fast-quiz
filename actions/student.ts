"use server";

import { db } from "@/lib/db";

import { Student } from "@/services";

export const createStudentAction = (studentData: Student) => {
	return db.student.create({
		data: studentData,
	});
};

export const joinLessonAction = (lessonId: string, studentId?: string) => {
	return db.lesson.update({
		where: {
			id: lessonId,
		},
		data: {
			students: {
				connect: {
					id: studentId,
				},
			},
		},
		include: {
			students: true,
		},
	});
};

export const leaveLessonAction = (lessonId: string, studentId?: string) => {
	return db.lesson.update({
		where: {
			id: lessonId,
		},
		data: {
			students: {
				disconnect: {
					id: studentId,
				},
			},
		},
		include: {
			students: true,
		},
	});
};
