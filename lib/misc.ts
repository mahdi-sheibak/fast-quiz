import { redirect as nextRedirect } from "next/navigation";

import { config } from "./config";

export const redirect = (path: string) => {
	if (config.baseApiUrl) nextRedirect(`${config.baseApiUrl}/${path}`);
};
