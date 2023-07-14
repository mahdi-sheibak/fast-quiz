"use server";

import { db } from "@/lib/db";
import { Lesson } from "@/services/lesson";

export const createLessonAction = (lessonData: Lesson) => {
	return db.lesson.create({
		data: lessonData,
	});
};

export const deleteLessonAction = (lessonId: string) => {
	return db.lesson.delete({
		where: {
			id: lessonId,
		},
		include: {
			questions: true,
		},
	});
};
