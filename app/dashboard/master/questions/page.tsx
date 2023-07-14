import { LinkButton } from "@/components/ui/link-button";
import { TypographyH3 } from "@/components/ui/typography";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export default async function QuestionsPage() {
	const masterId = cookies().get("id")?.value;

	const questions = await db.question.findMany({
		where: {
			masterId,
		},
	});

	if (!questions.length) {
		return (
			<div>
				<TypographyH3 className="text-red-700">
					{"سوالی یافت نشد!"}
				</TypographyH3>
			</div>
		);
	}

	return (
		<div className="flex flex-wrap gap-6">
			{questions.map((question) => {
				return (
					<LinkButton
						href={`/dashboard/master/questions/${question.id}`}
						variant="secondary"
						className="w-60 px-5 py-10"
						key={question.id}>
						{question.text}
					</LinkButton>
				);
			})}
		</div>
	);
}
