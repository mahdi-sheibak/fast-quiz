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
		<Form<Question> form={form} action={action} className="w-full">
			<Form.Field
				register={form.register("text")}
				label="متن سوال"
				className="w-1/2"
			/>
			<div>
				<Form.Field register={form.register("option1")} label="گزینه یک" />
				<Form.Field register={form.register("option2")} label="گزینه دو" />
				<Form.Field register={form.register("option3")} label="گزینه سه" />
				<Form.Field register={form.register("option4")} label="گزینه چهار" />
			</div>
		</Form>
	)
}
