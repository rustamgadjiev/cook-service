import { OrdersFilter } from "@/components/OrdersFilter/OrdersFilter";
import { OrderItems } from "@/components/OrderItems/OrderItems";
import { Title } from "@/components/UI/Title/Title";

const Orders = () => {
  return (
    <div className="container">
      <Title>Мои заказы</Title>
      <OrdersFilter />
      <OrderItems />
    </div>
  );
};

export default Orders;
