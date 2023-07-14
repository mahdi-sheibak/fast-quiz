"use server";

import { db } from "@/lib/db";
import { Lesson } from "@/services/lesson";

export const createLessonAction = (lessonData: Lesson) => {
	return db.lesson.create({
		data: lessonData,
	});
};
