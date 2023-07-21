import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { useRouter } from "next/router";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TProps) => {
  const navigate = useRouter();

  return (
    <h1 onClick={() => navigate.back()} className="title">
      <ArrowIcon />
      {children}
    </h1>
  );
};
