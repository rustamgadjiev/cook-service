import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import dynamic from "next/dynamic";
import Head from "next/head";

const CartList = dynamic(() => import("@/components/CartList/CartList"), {
  ssr: false,
});

const Cart = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Корзина`}</title>
      </Head>
      <div className="container">
        <Title>Корзина</Title>
        <CartList />
      </div>
    </>
  );
};

export default Cart;
