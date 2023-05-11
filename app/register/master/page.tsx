import { MasterRegisterForm } from "@/components/master-register";

export default function RegisterMaster() {
	return (
		<main className="flex">
			<div className="grow">
				<div className="flex relative justify-center items-center h-screen flex-col">
					<MasterRegisterForm />
				</div>
			</div>
			<div
				className="hidden md:block w-1/2
      ">
				some threejs effect or any thing to do
			</div>
		</main>
	);
}
