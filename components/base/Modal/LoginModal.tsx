import React, { FC } from "react";
import { signIn } from "next-auth/client";
import Button from "../Button";
import TextSubtext from "../TextSubtext";
import Google from "../../../icons/Google";

const LoginModal: FC = (props) => (
  <div className="flex justify-center flex-col w-64 mx-auto">
    <TextSubtext
      text={"Welcome Back."}
      textClassName={"text-3xl text-center"}
    />
    <div className="w-full mt-16 flex flex-col">
      <Button className="rounded-full border-2 hover:border-gray-400" onClick={() => signIn("google")}>
        <Google /> <span className="ml-3">Login with Google</span>
      </Button>
    </div>
  </div>
);

export default LoginModal;
