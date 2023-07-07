import { FieldValues, useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function useForm<Type extends FieldValues>(schema: z.Schema<Type>) {
	const form = useHookForm<Type>({
		resolver: zodResolver(schema),
	});

	return form;
}
