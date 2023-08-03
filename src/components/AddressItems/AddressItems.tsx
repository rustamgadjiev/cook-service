import { useAppSelector } from "@/store/store";
import { Button } from "../UI/Button/Button";
import AddressItem from "./AddressItem/AddressItem";
import s from "./AddressItems.module.scss";
import { selectAddressList } from "@/store/slices/address/address";
import Link from "next/link";

const AddressItems = () => {
  const addressList = useAppSelector(selectAddressList);

  const index = isNaN(
    addressList[addressList.findLastIndex((item) => item)]?.id
  )
    ? 0
    : addressList[addressList.findLastIndex((item) => item)]?.id + 1;

  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {addressList.map((address) => (
          <AddressItem key={address.id} {...address} />
        ))}
      </div>
      <Link href={`/address/${index}`}>
        <Button className={`white-btn ${addressList.length ? "" : s.empty}`}>
          Добавить адрес
        </Button>
      </Link>
    </div>
  );
};

export default AddressItems;
