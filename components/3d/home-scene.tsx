import { Canvas } from "@react-three/fiber";

import { QuestionMark } from "./question-mark";

export const HomeScene = () => {
	return (
		<Canvas style={{ width: "500px", height: "700px" }}>
			<QuestionMark />
		</Canvas>
	);
};
