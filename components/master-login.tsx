"use client"

import { User, userSchema } from "@/services/user"
import { useForm } from "@/hooks/useForm"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { useToast } from "@/components/ui/use-toast"
import { Form } from "@/components/form/form"
import { messages } from "@/messages"

interface MasterLoginFormProps {
	onSubmit: (user: User) => Promise<string>
}

const MasterLoginForm = ({ onSubmit }: MasterLoginFormProps) => {
	const form = useForm<User>(userSchema)

	const { toast } = useToast()

	const onAction = async (userData: User) => {
		const failMessage = await onSubmit(userData)
		if (!failMessage) return

		toast({
			description: failMessage,
			variant: "destructive",
		})
	}

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle className="text-center">ورود استاد</CardTitle>
			</CardHeader>

			<Form<User> form={form} action={onAction}>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<Form.Field
							label={messages.register.master.email.label}
							register={form.register("email")}
						/>
						<Form.Field
							label={messages.register.master.password.label}
							type="password"
							register={form.register("password")}
						/>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col">
					<Form.Submit className="w-full">ورود</Form.Submit>
					<Link href="/master/register" className="mt-7" mute underline>
						حسابی ندارید؟ ثبت نام استاد
					</Link>
				</CardFooter>
			</Form>
		</Card>
	)
}

export { MasterLoginForm }
