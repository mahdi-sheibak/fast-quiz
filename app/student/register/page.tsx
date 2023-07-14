import { StudentRegisterForm } from "@/components/student-register";
import { redirect } from "@/lib/misc";
import { Student } from "@/services";
import { createStudentAction } from "@/actions/student";

export default function RegisterStudent() {
	const createMaster = async (studentData: Student) => {
		"use server";

		await createStudentAction(studentData);

		redirect("/student/login");
	};

	return (
		<main className="flex">
			<div className="grow">
				<div className="relative flex h-screen flex-col items-center justify-center">
					<StudentRegisterForm onSubmit={createMaster} />
				</div>
			</div>
			<div
				className="hidden w-1/2 md:block
      ">
				student - some threejs effect or any thing to do
			</div>
		</main>
	);
}
