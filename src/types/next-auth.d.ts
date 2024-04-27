import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
import { User, Role } from "@prisma/client"

// https://next-auth.js.org/getting-started/typescript#main-module

// Setting custom types

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: User,
        role: Role
    }
}