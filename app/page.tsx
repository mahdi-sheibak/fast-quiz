import { GraduationCap, PenTool } from "lucide-react";

import { TypographyH1, TypographyH4 } from "@/components/ui/typography";
import { FirstScene } from "@/components/3d/first-scene";
import { messages } from "@/locals";
import { LinkButton } from "@/components/ui/link-button";

export default function Home() {
	return (
		<main className="flex h-screen items-center justify-around">
			<div className="flex justify-center">
				<div className="p-4">
					<TypographyH1>{messages.home.title}</TypographyH1>
					<TypographyH4 className="my-5">{messages.home.desc}</TypographyH4>
					<div className="flex flex-wrap gap-5">
						<LinkButton href="/master/login">
							<PenTool className="ml-2 h-4 w-4" />
							{messages.master.login.title}
						</LinkButton>
						<LinkButton variant="secondary" href="/student/login">
							<GraduationCap className="ml-2 h-4 w-4" />
							{messages.student.login.title}
						</LinkButton>
					</div>
				</div>
			</div>
			<div className="hidden md:block">
				{/* threejs cool effect */}
				<FirstScene />
			</div>
		</main>
	);
}
