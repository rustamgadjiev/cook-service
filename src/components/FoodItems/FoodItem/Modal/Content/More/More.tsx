import { useSelector } from "react-redux";
import s from "./More.module.scss";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { Item } from "./Item/Item";
import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "@/store/store";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";

type TProps = {
  setMores: Dispatch<SetStateAction<any>>;
};

const More = ({ setMores }: TProps) => {
  const selectedFoodItem = useSelector(selectFoodItem);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    selectedFoodItem.more.length === 0 ||
    !isLoggedIn || (
      <div className={s.more}>
        <h4>Дополнительно:</h4>
        {selectedFoodItem.more.map((item, i) => (
          <Item
            key={i}
            title={item.title}
            addPrice={item.addPrice}
            id={i}
            price={selectedFoodItem.price}
            setMores={setMores}
          />
        ))}
      </div>
    )
  );
};

export default More;
