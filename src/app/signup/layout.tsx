import React from "react";
import Container from "@/components/Container/Container";

const SignUplayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <Container className="flex justify-center">{children}</Container>;
};

export default SignUplayout;
