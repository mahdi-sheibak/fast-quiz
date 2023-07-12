import { UseFormRegisterReturn, useFormContext } from "react-hook-form";
import clsx from "clsx";

import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyMuted } from "@/components/ui/typography";

interface Option {
	label: string;
	value: string;
}

interface Props {
	options: Option[];
	register: UseFormRegisterReturn;
	label: string;
}

export const SelectField = ({ options, register, label }: Props) => {
	const {
		formState: { errors },
		setValue,
		trigger,
	} = useFormContext();

	const name = register.name;
	const errorMessage = errors[name]?.message?.toString();

	return (
		<div className="flex flex-col space-y-1.5">
			<Label>{label}:</Label>
			<Select
				onValueChange={async (newOptionValue) => {
					setValue(name, newOptionValue);
					await trigger(name);
				}}>
				<SelectTrigger
					className={clsx({
						"border-red-600": errorMessage,
					})}>
					<SelectValue placeholder={label} />
				</SelectTrigger>
				<SelectContent onBlur={register.onBlur}>
					<ScrollArea className="h-60">
						{options.map((option) => {
							return (
								<SelectItem key={option.label} value={option.value}>
									{option.label}
								</SelectItem>
							);
						})}
					</ScrollArea>
				</SelectContent>
			</Select>
			{errorMessage && (
				<TypographyMuted className="text-red-600">
					{errorMessage}
				</TypographyMuted>
			)}
		</div>
	);
};
SelectField.displayName = "SelectField";
