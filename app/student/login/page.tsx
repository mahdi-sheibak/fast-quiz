import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/components/ui/link";

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
					<Link href="/master/register" className="mt-7" mute underline>
						حسابی ندارید؟ ثبت نام دانشجو
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
