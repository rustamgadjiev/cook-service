import { Button } from "@/components/UI/Button/Button";
import {
  selectAddressId,
  selectAddressList,
} from "@/store/slices/address/address";
import { useAppSelector } from "@/store/store";
import dynamic from "next/dynamic";
import Link from "next/link";
import s from "./Address.module.scss";

const AddressItem = dynamic(
  () => import("@/components/AddressItems/AddressItem/AddressItem"),
  {
    ssr: false,
  }
);

const Address = () => {
  const addressId = useAppSelector(selectAddressId);
  const addressList = useAppSelector(selectAddressList);

  const findItem = addressList.find((address) => address.id === addressId);

  const index = isNaN(
    addressList[addressList.findLastIndex((item) => item)]?.id
  )
    ? 0
    : addressList[addressList.findLastIndex((item) => item)]?.id + 1;

  return findItem ? (
    <AddressItem {...findItem} />
  ) : (
    <Link href={`/address/${index}`}>
      <Button className={`white-btn ${addressList.length ? "" : s.empty}`}>
        Добавить адрес
      </Button>
    </Link>
  );
};

export default Address;
