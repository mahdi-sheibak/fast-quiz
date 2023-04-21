import { PenTool, GraduationCap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyH4 } from "@/components/ui/typography"

export default function Home() {
  return (
    <main className="flex items-center justify-around h-screen">
      <div>
        <TypographyH1>پویشگر</TypographyH1>
        <TypographyH4 className="mt-5 mb-5">
          جایی برای آزمودن دانسته های خود
        </TypographyH4>
        <Link href="/login/master">
          <Button>
            <PenTool className="ml-2 h-4 w-4" />
            ورود استاد
          </Button>
        </Link>
        <Link href="/login/student" className="mr-2 inline-block">
          <Button variant="secondary">
            <GraduationCap className="ml-2 h-4 w-4" />
            ورود دانشجو
          </Button>
        </Link>
      </div>
      <div className="hidden md:block">threejs cool effect</div>
    </main>
  )
}
