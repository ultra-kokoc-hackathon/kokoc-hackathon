import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Sign in",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials || !credentials.email || !credentials.password)
					return null;

				const response = await fetch(
					"https://84.201.146.234.sslip.io/api/v1/auth/me",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(credentials),
					}
				);

				if (response.ok) {
					const user = await response.json();
					return user;
				}

				return null;
			},
		}),
	],
};

export async function loginIsRequiredServer() {
	const session = await getServerSession(authConfig);
	if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
	if (typeof window !== "undefined") {
		const session = useSession();
		const router = useRouter();
		if (!session) router.push("/");
	}
}
