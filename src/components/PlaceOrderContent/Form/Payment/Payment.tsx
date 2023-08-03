import { Button } from "@/components/UI/Button/Button";
import s from "./Payment.module.scss";
import CardsIcon from "@/assets/images/icons/my-cards.svg";
import VisaIcon from "@/assets/images/icons/visa.svg";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectCardList } from "@/store/slices/cards/cards";
import { Dispatch, SetStateAction } from "react";
import { paymentList } from "@/utils/app-data";
import {
  selectPaymentId,
  setSelectedPaymentId,
} from "@/store/slices/orders/orders";

type TProps = {
  isVisible: boolean;
  setVisibleId: Dispatch<SetStateAction<number>>;
};

const Payment = ({ isVisible, setVisibleId }: TProps) => {
  const cardList = useAppSelector(selectCardList);
  const paymentId = useAppSelector(selectPaymentId);
  const dispatch = useAppDispatch();

  const currentElement =
    paymentList.find((payment) => payment.title === paymentId) ||
    cardList.find((card) => card.number === paymentId);

  return (
    <Button
      className={`${s.payment} white-btn ${isVisible ? "active" : ""}`}
      onClick={() => setVisibleId(isVisible ? -1 : 0)}
    >
      <span>
        {(currentElement?.icon && <currentElement.icon />) || <CardsIcon />}
        {currentElement?.title || "Оплата"}
      </span>
      {currentElement?.number && (
        <span>
          {`**** ${currentElement?.number.slice(-4)}`}
          <VisaIcon />
        </span>
      )}
      <div className={`${s.menu} ${isVisible ? s.active : ""}`}>
        <ul>
          {paymentList.map((payment) =>
            payment?.title ? (
              <li
                key={payment.title}
                onClick={() => dispatch(setSelectedPaymentId(payment.title))}
              >
                <payment.icon />
                {payment.title}
              </li>
            ) : (
              cardList.map((card) => (
                <li
                  key={card.id}
                  onClick={() => dispatch(setSelectedPaymentId(card.number))}
                >
                  <VisaIcon />
                  {`**** ${card.number.slice(-4)}`}
                </li>
              ))
            )
          )}
        </ul>
      </div>
    </Button>
  );
};

export default Payment;
