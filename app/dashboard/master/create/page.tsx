import { redirect } from "next/navigation"

import { createQuestionAction } from "@/actions/question"
import { Question } from "@/services/question"
import { TypographyH3 } from "@/components/ui/typography"
import { CreateQuestionForm } from "@/components/create-question"

export default function CreateMaster() {
	const action = async (questionData: Question) => {
		"use server"

		// cspell:ignore clhku1esr0000vbh2g05v7fbg
		await createQuestionAction(questionData, "clhku1esr0000vbh2g05v7fbg")
		redirect("/dashboard/master/questions")
	}

	return (
		<div className="w-full">
			<TypographyH3 className="mb-5">ایجاد سوال</TypographyH3>
			<CreateQuestionForm action={action} />
		</div>
	)
}
