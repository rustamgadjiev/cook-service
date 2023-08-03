import { OrdersFilter } from "@/components/OrdersFilter/OrdersFilter";
import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import dynamic from "next/dynamic";
import Head from "next/head";

const OrderItems = dynamic(() => import("@/components/OrderItems/OrderItems"), {
  ssr: false,
});

const Orders = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Заказы`}</title>
      </Head>
      <div className="container">
        <Title>Мои заказы</Title>
        <OrdersFilter />
        <OrderItems />
      </div>
    </>
  );
};

export default Orders;
