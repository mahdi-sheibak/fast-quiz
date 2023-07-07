import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "./button";
import { Input, InputProps } from "./input";

export const PasswordInput = (props: InputProps) => {
	const [show, setShow] = useState(false);

	return (
		<main className="relative flex">
			<Input {...props} type={show ? "text" : "password"} />
			<Button
				type="button"
				className="top-1/5 absolute left-0"
				variant="ghost"
				onClick={() => setShow((prevState) => !prevState)}>
				{show ? <Eye size={20} /> : <EyeOff size={20} />}
			</Button>
		</main>
	);
};
