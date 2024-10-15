"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  const { data: session, status } = useSession();
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex flex-wrap justify-around py-3 items-center">
      <h1 className="text-lg font-semibold">
        <Link href={"/"}>Todo App</Link>
      </h1>
      <ul className="flex gap-[40px] text-sm items-center">
        <li>Home</li>
        <li>Prducts</li>
        <li>About</li>
        <li>
          {status === "authenticated" ? (
            <button onClick={signOut}>Logout</button>
          ) : (
            <button onClick={() => signIn("google")}>Login</button>
          )}
        </li>
        <li className="flex flex-col justify-center items-center gap-1">
          <Image
            width={34}
            height={34}
            alt="Logo"
            src={session?.user?.image || "/icon.png"}
            className="rounded-full border-2 border-black object-contain"
          />
          <span className="">
            {status === "authenticated" && session?.user?.name}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
