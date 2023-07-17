import s from "./Bottom.module.scss";
import { Button } from "@/components/UI/Button/Button";
import { Count } from "./Count/Count";

export const Bottom = () => {
  return (
    <div className={`${s.bottom} ${s.container}`}>
      <Count />
      <Button className={s.btn}>Добавить</Button>
    </div>
  );
};
