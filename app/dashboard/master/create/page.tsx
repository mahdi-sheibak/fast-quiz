import { CreateQuestionForm } from "@/components/create-question"

export default function CreateMaster() {
	const action = async () => {
		"use server"
		await new Promise((resolve) => resolve(""))
		console.log("create question")
	}

	return (
		<div className="w-full">
			<h2>Create Master</h2>
			<CreateQuestionForm action={action} />
		</div>
	)
}
