"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <button onClick={() => signIn("google")}>Login</button>
        </>
      ) : (
        <button onClick={signOut}>Logout</button>
      )}
      <Image
        src={session?.user?.image || "/icon.png"}
        className="image"
        height={34}
        width={34}
        alt="ewrew"
      />
    </>
  );
};

export default Login;
