import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const AddressItems = dynamic(
  () => import("@/components/AddressItems/AddressItems"),
  {
    ssr: false,
  }
);

const Address = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Мои адреса`}</title>
      </Head>
      <div className="container">
        <Title>Мои адреса</Title>
        <AddressItems />
      </div>
    </>
  );
};

export default Address;
