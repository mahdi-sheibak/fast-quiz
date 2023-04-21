import Link from "next/link"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { TypographyP } from "@/components/ui/typography"

export default function StudentLogin() {
  return (
    <main className="flex items-center justify-around h-screen">
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
          <TypographyP>
            <Link
              href="/register/master"
              className="hover:text-brand underline underline-offset-4"
            >
              حسابی ندارید؟ ثبت نام دانشجو
            </Link>
          </TypographyP>
        </CardFooter>
      </Card>
    </main>
  )
}
