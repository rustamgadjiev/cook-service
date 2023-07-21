import { Title } from "@/components/UI/Title/Title";
import dynamic from "next/dynamic";
import React from "react";

const AddressItems = dynamic(() => import("@/components/AddressItems/AddressItems"), {
  ssr: false,
});

const Address = () => {
  return (
    <div className="container">
      <Title>Мои адреса</Title>
      <AddressItems />
    </div>
  );
};

export default Address;
