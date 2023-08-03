import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./AddressFilter.module.scss";
import { selectAddressId, selectAddressList, setSelectedAddressId } from "@/store/slices/address/address";
import { Button } from "../../UI/Button/Button";
import Link from "next/link";

const AddressFilter = () => {
  const addressList = useAppSelector(selectAddressList);
  const addressId = useAppSelector(selectAddressId);

  const dispatch = useAppDispatch();

  const index = isNaN(
    addressList[addressList.findLastIndex((item) => item)]?.id
  )
    ? 0
    : addressList[addressList.findLastIndex((item) => item)]?.id + 1;

  return (
    <div className={s.filter}>
      {addressList.length > 0 &&
        addressList.map((address) => (
          <Button
            key={address.id}
            className={addressId === address.id ? "active white-btn" : "white-btn"}
            onClick={() => dispatch(setSelectedAddressId(address.id))}
          >
            {address.title}
          </Button>
        ))}
      <Link href={`/address/${index}`}>
        <Button className="white-btn">Новый адрес</Button>
      </Link>
    </div>
  );
};

export default AddressFilter;
