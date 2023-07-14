import { db } from "@/lib/db";

export const loginMaster = (email: string, password: string) => {
	return db.master.findFirst({
		where: {
			email: email,
			password: password,
		},
	});
};

export const loginStudent = (email: string, password: string) => {
	return db.student.findFirst({
		where: {
			email: email,
			password: password,
		},
	});
};
