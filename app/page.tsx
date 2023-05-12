import Link from "next/link"
import { messages } from "@/messages"
import { GraduationCap, PenTool } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyH4 } from "@/components/ui/typography"

export default function Home() {
	return (
		<main className="flex h-screen items-center justify-around">
			<div>
				<TypographyH1>{messages.home.title}</TypographyH1>
				<TypographyH4 className="my-5">{messages.home.desc}</TypographyH4>
				<Link href="/login/master">
					<Button>
						<PenTool className="ml-2 h-4 w-4" />
						{messages.home.master.title}
					</Button>
				</Link>
				<Link href="/login/student" className="mr-2 inline-block">
					<Button variant="secondary">
						<GraduationCap className="ml-2 h-4 w-4" />
						{messages.home.student.title}
					</Button>
				</Link>
			</div>
			<div className="hidden md:block">threejs cool effect</div>
		</main>
	)
}
