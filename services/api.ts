import ky from "ky";

import { config } from "@/lib/config";

export const api = ky.extend({
	prefixUrl: `${
		config.baseApiUrl ? config.baseApiUrl : "http://localhost:3000"
	}/api`,
});
