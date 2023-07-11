import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;