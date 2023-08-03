import { Button } from "@/components/UI/Button/Button";
import s from "./Count.module.scss";
import { useAppDispatch } from "@/store/store";
import { decrementCount, incrementCount } from "@/store/slices/cart/cart";

type TProps = {
  count: number;
  id: string;
  mores: string[];
};

export const Count = ({ count, id, mores }: TProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.count}>
      <Button onClick={() => dispatch(decrementCount({ id, mores }))}>
        <span></span>
      </Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(incrementCount({ id, mores }))}>
        <span></span>
        <span></span>
      </Button>
    </div>
  );
};
