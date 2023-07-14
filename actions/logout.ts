"use client";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
	const cookieStore = cookies();

	console.log("logout!");

	cookieStore.delete("type");
	cookieStore.delete("email");
	cookieStore.delete("id");
	cookieStore.delete("fullName");
	cookieStore.delete("password");
	cookieStore.delete("university");

	redirect("/");
};
