import NextAuth from "next-auth";
import { Options } from "./options";

export const hander = NextAuth(Options);

export { hander as GET, hander as POST };