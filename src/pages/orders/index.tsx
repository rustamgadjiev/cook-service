import { useRouter } from "next/router";
import s from "./orders.module.scss";
import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { OrdersFilter } from "@/components/OrdersFilter/OrdersFilter";
import { OrderItems } from "@/components/OrderItems/OrderItems";

const Orders = () => {
  const navigate = useRouter();

  return (
    <div className={s.orders}>
      <div className="container">
        <h1 onClick={() => navigate.back()}>
          <ArrowIcon />
          Мои заказы
        </h1>
        <OrdersFilter />
        <OrderItems />
      </div>
    </div>
  );
};

export default Orders;
