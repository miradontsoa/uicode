
// import { MongoDBAdapter } from "@auth/mongodb-adapter" 
import { createUser, findUser } from "@/services/userServices";
import { AppUser } from "@/types";
import { WithId } from "mongodb";
import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import GithubProvider from "next-auth/providers/github";

// nextauth fix
import crypto from "node:crypto";
global.crypto ??= crypto;

export const authOptions: NextAuthOptions = {
    /* adapter: MongoDBAdapter(mongodbClientPromise, {
        databaseName: "nextauth_db",
    }) as any, */
    // adapter: MongoDBAdapter(mongodbClientPromise) as any,
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        /* CredentialsProvider({
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
                const user = { id: "1", name: "Admin", email: "admin@admin.com" };
                return user;
            },
        }), */
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID || "",
            clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
            issuer: process.env.AUTH0_ISSUER,
            authorization: {
                params: { // require login (not using current session of Auth0)
                    prompt: "login",
                }
            }
        })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token = {
                    ...token,
                    id: user.id,
                    provider: account?.provider
                }
                // TODO 1: here: get user account details from database, then add to token?
                let existUser: AppUser | undefined;
                // load user
                switch (account?.provider) {
                    case "github":
                        existUser = (await findUser({
                            "authGithub.email": user?.email
                        })) || undefined
                        break;
                    case "auth0":
                        existUser = (await findUser({
                            "authAuth0.email": user?.email
                        })) || undefined
                        break;

                    default:
                        existUser = (await findUser({
                            "email": user?.email || undefined
                        })) || undefined
                        break;
                }
                if (existUser) {
                    token.accountType = existUser.accountType;
                    // only send userId so that it will be used to load entire user data from 
                    // API to AppContext
                    token.userId = existUser._id;
                }
            }
            // console.log(account);
            return token
        },
        async session({ session, token }) {
            session.provider = token?.provider;
            session.accountType = token?.accountType;
            session.user = {
                ...session.user,
                userId: token?.userId
            };
            return session
        },
        async signIn({ user, account, profile, email, credentials }) {
            let existUser: WithId<AppUser> | undefined;
            switch (account?.provider) {
                case "github":
                    existUser = await findUser({
                        "authGithub.email": user?.email
                    }) || undefined
                    break;
                case "auth0":
                    existUser = await findUser({
                        "authAuth0.email": user?.email
                    }) || undefined
                    break;

                default:
                    existUser = await findUser({ email: user?.email || undefined }) || undefined
                    break;
            }
            if (!existUser) {
                // afaka atao: atao false ito dia invite to create account (fa maha lava process)
                // this is a new user so add it to the database
                const newUser: AppUser = {
                    email: user?.email || undefined,
                    name: user?.name || undefined,
                    image: user?.image || undefined,
                    accountType: "registered",
                    accountStatus: "new",
                }
                switch (account?.provider) {
                    case "github":
                        newUser.authGithub = {
                            email: user.email || undefined,
                            name: user.name || undefined,
                            githubId: account?.providerAccountId,
                        }
                        break;
                    case "auth0":
                        newUser.authAuth0 = {
                            email: user.email || undefined,
                            name: user.name || undefined,
                            auth0Id: account?.providerAccountId,
                        }
                        break;
                    case "google":
                        newUser.authGoogle = {
                            email: user.email || undefined,
                            name: user.name || undefined,
                            googleId: account?.providerAccountId,
                        }
                        break;

                    default:
                        break;
                }
                await createUser(newUser)
            }
            /* else {
                existUser.accountStatus = "regular";
                await updateUser(existUser)
                
            } */
            return true
        },

    }
}

