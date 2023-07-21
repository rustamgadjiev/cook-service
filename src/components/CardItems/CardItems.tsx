import { useAppSelector } from "@/store/store";
import { Button } from "../UI/Button/Button";
import { CardItem } from "./CardItem/CardItem";
import s from "./CardItems.module.scss";
import { selectCardList } from "@/store/slices/cards/cards";
import Link from "next/link";

const CardItems = () => {
  const cardList = useAppSelector(selectCardList);

  const index = isNaN(cardList[cardList.findLastIndex((item) => item)]?.id)
    ? 0
    : cardList[cardList.findLastIndex((item) => item)]?.id + 1;

  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {cardList.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
      <Link href={`/cards/${index}`}>
        <Button className={`white-btn ${cardList.length ? "" : s.empty}`}>
          Добавить карту
        </Button>
      </Link>
    </div>
  );
};

export default CardItems;
