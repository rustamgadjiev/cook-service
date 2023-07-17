import s from "./Content.module.scss";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MoreItem } from "./MoreItem/MoreItem";

export const Content = () => {
  const selectedFoodItem = useSelector(selectFoodItem);
  const [price, setPrice] = useState<number>(selectedFoodItem.price);

  return (
    <div className={`${s.content} ${s.container}`}>
      <h3 className={s.title}>{selectedFoodItem.title}</h3>
      <div className={s.info}>
        <span>{selectedFoodItem.weight}</span>
        <span>{selectedFoodItem.calories} ккал</span>
        <span className={s.price}>{price}₽</span>
      </div>
      <p className={s.description}>{selectedFoodItem.description}</p>
      {selectedFoodItem.more.length === 0 || (
        <div className={s.more}>
          <h4>Дополнительно:</h4>
          {selectedFoodItem.more.map((item, i) => (
            <MoreItem
              title={item.title}
              addPrice={item.addPrice}
              id={i}
              price={price}
              setPrice={setPrice}
            />
          ))}
        </div>
      )}
    </div>
  );
};
