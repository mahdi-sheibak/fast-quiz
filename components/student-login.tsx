"use client";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { useToast } from "@/components/ui/use-toast";
import { Form } from "@/components/form/form";
import { useForm } from "@/hooks/use-form";
import { User, userSchema } from "@/services/user";
import { messages } from "@/locals";

interface StudentLoginFormProps {
	onSubmit: (user: User) => Promise<string | null>;
}

const StudentLoginForm = ({ onSubmit }: StudentLoginFormProps) => {
	const form = useForm<User>(userSchema);

	const { toast } = useToast();

	const onAction = async (userData: User) => {
		const failMessage = await onSubmit(userData);
		if (!failMessage) return;

		toast({
			description: failMessage,
			variant: "destructive",
		});
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle className="text-center">
					{messages.student.login.title}
				</CardTitle>
			</CardHeader>

			<Form<User> form={form} action={onAction}>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<Form.Field
							label={messages.email.label}
							register={form.register("email")}
						/>
						<Form.Field
							label={messages.password.label}
							type="password"
							register={form.register("password")}
						/>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col">
					<Form.Submit className="w-full">{messages.actions.login}</Form.Submit>
					<Link href="/master/register" className="mt-7" mute underline>
						{messages.student.login.register}
					</Link>
				</CardFooter>
			</Form>
		</Card>
	);
};

export { StudentLoginForm };
