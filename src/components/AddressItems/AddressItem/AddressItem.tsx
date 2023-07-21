import { Button } from "@/components/UI/Button/Button";
import s from "./AddressItem.module.scss";
import Link from "next/link";
import { TAddressList } from "@/store/slices/address/types";

export const AddressItem = ({
  title,
  city,
  street,
  home,
  flatNumber,
  id,
}: TAddressList) => {
  return (
    <Link href={`/address/${id}`}>
      <Button className={`white-btn ${s.item}`}>
        <h2>{title}</h2>
        <p>{`г.${city} ул.${street} Дом ${home} кв. ${flatNumber}`}</p>
      </Button>
    </Link>
  );
};
