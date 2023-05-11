"use client";

import { Form } from "@/components/form/form";
import { useForm } from "@/hooks/useForm";
import { masterSchema, Master, createMaster } from "@/services/master";
import { messages } from "@/messages";

const MasterRegisterForm = () => {
	const form = useForm<Master>(masterSchema);

	return (
		<Form<Master>
			className="grid gap-4 md:w-1/2 w-full pr-3 pl-3 md:p-0"
			onSubmit={createMaster}
			form={form}>
			<Form.Field
				label={messages.register.master.fullName.label}
				register={form.register("fullName")}
			/>
			<Form.Field
				label={messages.register.master.university.label}
				register={form.register("university")}
			/>
			<Form.Field
				label={messages.register.master.email.label}
				register={form.register("email")}
			/>
			<Form.Field
				label={messages.register.master.password.label}
				type="password"
				register={form.register("password")}
			/>
			<Form.Submit className="w-1/2">
				{messages.register.master.submit.text}
			</Form.Submit>
		</Form>
	);
};

export { MasterRegisterForm };
