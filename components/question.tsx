"use client";
import { useState } from "react";
import { Option } from "@prisma/client";
import { SendIcon } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TypographyH3 } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { IconButton } from "@/components/ui/icon-button";

interface Props {
	text: string;
	options: Option[];
	action: (chooseOption: string) => Promise<void>;
	defaultValue?: string;
}

const Question = ({ text, options, defaultValue, action }: Props) => {
	const [chooseOption, setChooseOption] = useState("");
	const [loading, setLoading] = useState(false);

	const onSendOption = async () => {
		setLoading(true);
		await action(chooseOption);
		setLoading(false);
	};

	return (
		<>
			<TypographyH3>{text}</TypographyH3>
			<RadioGroup
				className="flex flex-col gap-3"
				defaultValue={defaultValue}
				onValueChange={(newValue) => setChooseOption(newValue)}>
				{options.map((option) => (
					<div key={option.id} className="flex items-center gap-2">
						<RadioGroupItem value={option.id} id={option.id} />
						<Label htmlFor={option.id}>{option.text}</Label>
					</div>
				))}
			</RadioGroup>
			<div>
				<IconButton
					icon={<SendIcon />}
					loading={loading}
					className="px-10"
					disabled={!chooseOption}
					onClick={onSendOption}>
					{"ثبت"}
				</IconButton>
			</div>
		</>
	);
};

export { Question };
