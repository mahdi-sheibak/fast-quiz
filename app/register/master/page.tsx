import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterMaster() {
  return (
    <main className="flex">
      <div className="grow">
        <div className="flex relative justify-center items-center h-screen flex-col">
          <div className="grid gap-4 md:w-1/2 w-full pr-3 pl-3 md:p-0">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullName">نام و نام خانوادگی:</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="University">نام دانشگاه:</Label>
              <Input id="University" type="text" placeholder="نام دانشگاه" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">ایمیل:</Label>
              <Input id="email" type="email" placeholder="ایمیل" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">رمز عبور:</Label>
              <Input id="password" type="password" placeholder="رمز عبور" />
            </div>
            <Button className="w-1/2">ثبت نام</Button>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block w-1/2
      "
      >
        some threejs effect or any thing to do
      </div>
    </main>
  )
}
