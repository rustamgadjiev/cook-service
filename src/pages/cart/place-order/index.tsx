import { PlaceOrderContent } from "@/components/PlaceOrderContent/PlaceOrderContent";
import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import Head from "next/head";

const PlaceOrder = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Оформление заказ`}</title>
      </Head>
      <div className="container">
        <Title>Оформление заказа</Title>
        <PlaceOrderContent />
      </div>
    </>
  );
};

export default PlaceOrder;
