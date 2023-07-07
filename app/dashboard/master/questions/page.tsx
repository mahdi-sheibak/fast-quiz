import { LinkButton } from "@/components/ui/link-button";
import { TypographyH3 } from "@/components/ui/typography";
import { db } from "@/lib/db";

export default async function QuestionsPage() {
	const list = await db.question.findMany();

	return (
		<main className="flex flex-wrap gap-5">
			{!list.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز سوالی ایجاد نشده است!"}
				</TypographyH3>
			)}
			{list.map((question) => (
				<LinkButton
					key={question.id}
					href={`/dashboard/master/questions/${question.id}`}
					variant="ghost"
					className="p-10">
					<h3>{question.text}</h3>
				</LinkButton>
			))}
		</main>
	);
}
