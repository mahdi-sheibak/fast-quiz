"use client"

import { Question, questionSchema } from "@/services/question"
import { useForm } from "@/hooks/use-form"

import { Form } from "./form/form"

interface CreateQuestionFormProps {
	action: (question: Question) => Promise<void>
}

export function CreateQuestionForm({ action }: CreateQuestionFormProps) {
	const form = useForm(questionSchema)

	return (
		<Form<Question> form={form} action={action} className="w-full ">
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
	)
}
