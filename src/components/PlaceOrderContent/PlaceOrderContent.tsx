import dynamic from "next/dynamic";
import { Form } from "./Form/Form";

const AddressFilter = dynamic(() => import("./AddressFilter/AddressFilter"), {
  ssr: false,
});

export const PlaceOrderContent = () => {
  return (
    <>
      <AddressFilter />
      <Form />
    </>
  );
};
