"use client";

import { Lesson, lessonSchema } from "@/services/lesson";
import { useForm } from "@/hooks/use-form";
import { Form } from "@/components/form/form";
import { messages } from "@/locals";

interface CreateLessonFormProps {
	onSubmit: (master: Lesson) => Promise<void>;
	masterId?: string;
}

const CreateLessonForm = ({ onSubmit, masterId }: CreateLessonFormProps) => {
	const form = useForm<Lesson>(lessonSchema, {
		masterId,
	});

	return (
		<Form<Lesson>
			className="grid w-full gap-4 px-3 md:w-1/2 md:p-0"
			action={onSubmit}
			form={form}>
			<Form.Field
				label={messages.lesson.create_lesson}
				register={form.register("name")}
			/>
			<Form.Submit className="w-1/4">
				{messages.lesson.submit_lesson}
			</Form.Submit>
		</Form>
	);
};

export { CreateLessonForm };
