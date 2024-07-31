import NextAuth  from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : "Ov23livp1LwIRJTKCx3f",
            clientSecret : "c03c90addae9d0be60fe5b8e1892cfddd7c6de94"
        }),
    ],
    secret : 'qwer1234'
};

export default NextAuth(authOptions);