import { MasterRegisterForm } from "@/components/master-register";
import { createMasterAction } from "@/actions/master";
import { Master } from "@/services";
import { redirect } from "@/lib/misc";

export default function RegisterMaster() {
	const createMaster = async (masterData: Master) => {
		"use server";

		await createMasterAction(masterData);

		redirect("/master/login");
	};

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
				master - some threejs effect or any thing to do
			</div>
		</main>
	);
}
