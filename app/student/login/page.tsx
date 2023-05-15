import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypographySmall } from "@/components/ui/typography"

export default function LoginStudent() {
	return (
		<main className="flex h-screen items-center justify-around">
			<Card className="w-[350px] ">
				<CardHeader>
					<CardTitle className="text-center">ورود دانشجو</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">ایمیل</Label>
							<Input id="email" type="email" placeholder="ایمیل" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">رمز عبور</Label>
							<Input id="password" type="password" placeholder="رمز عبور" />
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col">
					<Button className="w-full">ورود</Button>
					<TypographySmall className="mt-7">
						<Link
							href="/master/register"
							className="hover:text-brand underline underline-offset-4">
							حسابی ندارید؟ ثبت نام دانشجو
						</Link>
					</TypographySmall>
				</CardFooter>
			</Card>
		</main>
	)
}
