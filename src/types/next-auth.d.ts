
import { ObjectId } from "mongodb";
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import { DefaultJWT } from "next-auth/jwt";
import { AccountType } from ".";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        provider?: string;
        accountType?: AccountType;
        /** The user's name. */
        user: {
            name?: string,
            userId?: string | ObjectId | number,
        } & DefaultSession["user"]
    }
}
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** Provider  */
        provider?: string;
        accountType?: AccountType;
        userId?: string | ObjectId | number;
    }
}
