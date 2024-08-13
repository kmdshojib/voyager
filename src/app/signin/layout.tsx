import React from "react";
import Container from "@/components/Container/Container";

const SignInlayOut = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <Container className="flex justify-center">{children}</Container>;
};

export default SignInlayOut;
