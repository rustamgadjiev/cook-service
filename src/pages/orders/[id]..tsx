import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import dynamic from "next/dynamic";
import Head from "next/head";

const OrderContent = dynamic(
  () => import("@/components/OrderContent/OrderContent"),
  {
    ssr: false,
  }
);

type TProps = {
  id: string;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  return { props: { id } };
}

const OrderPage = ({ id }: TProps) => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Заказ №${id}`}</title>
      </Head>
      <div className="container">
        <Title>№{id}</Title>
        <OrderContent id={+id} />
      </div>
    </>
  );
};

export default OrderPage;
