import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectTrigger,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";

export const SelectUniversity = () => {
	return (
		<div className="flex flex-col space-y-1.5">
			<Label>{"دانشگاه"}:</Label>
			<div className="w-full">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="1">Item 1</SelectItem>
							<SelectItem value="2">Item 1</SelectItem>
							<SelectItem value="3">Item 1</SelectItem>
							<SelectItem value="4">Item 1</SelectItem>
							<SelectItem value="5">Item 1</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};
