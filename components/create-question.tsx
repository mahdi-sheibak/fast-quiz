"use client";

import { Form } from "@/components/form/form";
import { useForm } from "@/hooks/use-form";
import { Question, questionSchema } from "@/services/question";

interface CreateQuestionFormProps {
	onSubmit: (question: Question) => Promise<void>;
	masterId?: string;
}

const CreateQuestionForm = ({
	onSubmit,
	masterId,
}: CreateQuestionFormProps) => {
	const form = useForm(questionSchema, {
		masterId,
	});

	return (
		<Form<Question> form={form} action={onSubmit} className="w-full">
			<div className="mb-3 flex flex-col gap-4 py-4">
				<Form.Field register={form.register("text")} label="متن سوال" />
				<Form.Field
					register={form.register("correctOption")}
					label="گزینه یک - جواب درست"
					className="border-green-600"
				/>
				<Form.Field register={form.register("option1")} label="گزینه دو" />
				<Form.Field register={form.register("option2")} label="گزینه سه" />
				<Form.Field register={form.register("option3")} label="گزینه چهار" />
			</div>
			<Form.Submit>ایجاد سوال</Form.Submit>
		</Form>
	);
};

export { CreateQuestionForm };
