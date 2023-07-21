import { OrderContent } from "@/components/OrderContent/OrderContent";
import { Title } from "@/components/UI/Title/Title";
import { selectOrderList } from "@/store/slices/orders/orders";
import { useAppSelector } from "@/store/store";

type TProps = {
  id: string;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  return { props: { id } };
}

const OrderPage = ({ id }: TProps) => {
  return (
    <div className="container">
      <Title>№{id}</Title>
      <OrderContent id={+id} />
    </div>
  );
};

export default OrderPage;
