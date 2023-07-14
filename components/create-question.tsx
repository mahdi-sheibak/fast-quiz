"use client";

import { Form } from "@/components/form/form";
import { useForm } from "@/hooks/use-form";
import { Question, questionSchema } from "@/services/question";

interface CreateQuestionFormProps {
	onSubmit: (question: Question) => Promise<void>;
}

const CreateQuestionForm = ({ onSubmit }: CreateQuestionFormProps) => {
	const form = useForm(questionSchema);

	return (
		<Form<Question> form={form} action={onSubmit} className="w-full ">
			<div className="mb-3 flex flex-col gap-3">
				<Form.Field register={form.register("text")} label="متن سوال" />
				<Form.Field
					register={form.register("option1")}
					label="گزینه یک - جواب درست"
					className="border-green-600"
				/>
				<Form.Field register={form.register("option2")} label="گزینه دو" />
				<Form.Field register={form.register("option3")} label="گزینه سه" />
				<Form.Field register={form.register("option4")} label="گزینه چهار" />
			</div>
			<Form.Submit>ایجاد سوال</Form.Submit>
		</Form>
	);
};

export { CreateQuestionForm };
