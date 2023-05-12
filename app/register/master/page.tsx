import { createMaster } from "@/lib/db"
import { MasterRegisterForm } from "@/components/master-register"

export default function RegisterMaster() {
	return (
		<main className="flex">
			<div className="grow">
				<div className="relative flex h-screen flex-col items-center justify-center">
					<MasterRegisterForm onSubmit={createMaster} />
				</div>
			</div>
			<div
				className="hidden w-1/2 md:block
      ">
				some threejs effect or any thing to do
			</div>
		</main>
	)
}
