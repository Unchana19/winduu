"use client";

import EyeFilledIcon from "@/components/eye-fill-icon";
import EyeSlashFilledIcon from "@/components/eye-slash-icon";
import { Button, Input } from "@nextui-org/react";
import { NextPage } from "next";
import React, { useState } from "react";

interface Props {}

const SignUpPage: NextPage<Props> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSignIn = () => setIsSignIn(true);

  return (
    <div className="mt-96 space-y-8 w-full justify-center items-center flex flex-col">
      <p className="text-4xl font-bold">Sign Up</p>
      <Input
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        className="max-w-2xl"
      />

      <Input
        label="Password"
        placeholder="xxxxxx"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-2xl"
      />

      <Button color={isSignIn ? "success" : "primary"} onClick={handleSignIn}>
        <p className="text-lg font-semibold p-20">
          {isSignIn ? "Save your password success eiei" : "Sign In"}
        </p>
      </Button>
    </div>
  );
};

export default SignUpPage;
