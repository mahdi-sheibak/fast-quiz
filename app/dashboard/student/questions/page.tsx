import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { db } from "@/lib/db";
import Link from "next/link";

export const fetchCache = "force-no-store";

export default async function QuestionsPage() {
	const questions = await db.question.findMany({
		include: {
			lesson: {
				include: {
					master: true,
				},
			},
		},
	});

	return (
		<section className="flex flex-wrap gap-5">
			{!questions.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز سوالی وجود ندارد!"}
				</TypographyH3>
			)}
			{questions.map((question) => (
				<Link
					key={question.id}
					href={`/dashboard/student/questions/${question.id}`}>
					<Card className="w-[350px] transition-colors duration-300 ease-in-out hover:bg-slate-900">
						<CardHeader className="flex gap-3">
							<CardTitle>{question.text}</CardTitle>
							<CardDescription>
								{question.lesson?.name ?? "ناشناخته"}
							</CardDescription>
							<TypographyMuted>
								{question.lesson?.master.fullName ?? "ناشناخته"}
							</TypographyMuted>
						</CardHeader>
					</Card>
				</Link>
			))}
		</section>
	);
}
