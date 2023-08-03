import dynamic from "next/dynamic";
import s from "./Form.module.scss";
import { Time } from "./Time/Time";
import { useState } from "react";
import { FormButton } from "./FormButton/FormButton";

const Address = dynamic(() => import("./Address/Address"), {
  ssr: false,
});
const Payment = dynamic(() => import("./Payment/Payment"), {
  ssr: false,
});

export const Form = () => {
  const [visibleId, setVisibleId] = useState<number>(-1);

  return (
    <form className={s.form}>
      <div className={s.inner}>
        <div>
          <Address />
          <Payment isVisible={visibleId === 0} setVisibleId={setVisibleId} />
          <Time isVisible={visibleId === 1} setVisibleId={setVisibleId} />
        </div>
        <textarea placeholder="Комментарий (если есть)"></textarea>
      </div>
      <FormButton />
    </form>
  );
};
