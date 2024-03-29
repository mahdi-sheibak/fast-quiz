import { LinkButton } from "@/components/ui/link-button";
import { TypographyH3 } from "@/components/ui/typography";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const fetchCache = "force-no-store";

export default async function MasterDashboard() {
	const cookieStore = cookies();

	const masterId = cookieStore.get("id");

	const lessons = await db.lesson.findMany({
		where: {
			masterId: masterId?.value,
		},
	});

	return (
		<main className="flex flex-wrap gap-5">
			{!lessons.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز درسی ایجاد نشده!"}
				</TypographyH3>
			)}
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
