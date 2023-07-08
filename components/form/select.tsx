import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectGroup,
	SelectLabel,
	SelectValue,
	SelectSeparator,
} from "@/components/ui/select";
import { universities } from "@/messages";

export const SelectField = () => {
	return (
		<div className="flex flex-col space-y-1.5">
			<Label>{"دانشگاه"}:</Label>
			<Select>
				<SelectTrigger style={{ direction: "rtl" }}>
					<SelectValue placeholder="دانشگاه" />
				</SelectTrigger>
				<SelectContent>
					{/* <SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem> */}
					{universities.map((university) => {
						return (
							<SelectItem
								key={university.label}
								style={{ direction: "rtl" }}
								value={university.value}>
								{university.label}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
};
SelectField.displayName = "SelectField";
