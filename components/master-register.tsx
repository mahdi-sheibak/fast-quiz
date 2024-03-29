"use client";

import { Form } from "@/components/form/form";
import { useForm } from "@/hooks/use-form";
import { Master, masterSchema } from "@/services/master";
import { messages, universities } from "@/locals";

interface MasterRegisterFormProps {
	onSubmit: (master: Master) => Promise<void>;
}

const MasterRegisterForm = ({ onSubmit }: MasterRegisterFormProps) => {
	const form = useForm<Master>(masterSchema);

	return (
		<Form<Master>
			className="grid w-full gap-4 px-3 md:w-1/2 md:p-0"
			action={onSubmit}
			form={form}>
			<Form.Field
				label={messages.fullName.label}
				register={form.register("fullName")}
			/>
			<Form.SelectField
				label={messages.university.label}
				options={universities}
				register={form.register("university")}
			/>
			<Form.Field
				label={messages.email.label}
				register={form.register("email")}
			/>
			<Form.Field
				label={messages.password.label}
				type="password"
				register={form.register("password")}
			/>
			<Form.Submit className="w-1/2">{messages.actions.register}</Form.Submit>
		</Form>
	);
};

export { MasterRegisterForm };
