import { Button } from "@/components/UI/Button/Button";
import s from "./Buttons.module.scss";

type TProps = {
  condition: number | undefined;
};

export const Buttons = ({ condition }: TProps) => {
  return (
    <div className={s.buttons}>
      <Button className="whatsapp-btn">Управлять в WhatsApp</Button>
      <Button className="white-btn">
        {condition === 1 ? "Отменить заказ" : "Повторить заказ"}
      </Button>
    </div>
  );
};
