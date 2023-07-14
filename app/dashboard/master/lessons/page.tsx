import { cookies } from "next/headers";

import { db } from "@/lib/db";
import { TypographyH3 } from "@/components/ui/typography";
import { LinkButton } from "@/components/ui/link-button";

export default async function LessonsPage() {
	const cookieStore = cookies();

	const masterId = cookieStore.get("id");

	const lessons = await db.lesson.findMany({
		where: {
			masterId: masterId?.value,
		},
	});

	if (!lessons.length) {
		return (
			<TypographyH3 className="text-red-700">
				{"هنوز درسی ایجاد نشده!"}
			</TypographyH3>
		);
	}

	return (
		<main className="flex flex-wrap gap-5">
			{lessons.map((lesson) => (
				<LinkButton
					key={lesson.id}
					href={`/dashboard/master/lessons/${lesson.id}`}
					variant="secondary"
					className="w-60 p-10">
					<h3>{lesson.name}</h3>
				</LinkButton>
			))}
		</main>
	);
}
