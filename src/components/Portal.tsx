import React from "react";
import { createPortal } from "react-dom";

type TProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: TProps) => {
  return createPortal(
    children,
    document.getElementById("portal-root") as HTMLElement | DocumentFragment
  );
};
