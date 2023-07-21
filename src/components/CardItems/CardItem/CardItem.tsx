import { Button } from "@/components/UI/Button/Button";
import s from "./CardItem.module.scss";
import VisaIcon from "@/assets/images/icons/visa.svg";
import Link from "next/link";

type TProps = {
  number: string;
  id: number;
};

export const CardItem = ({ number, id }: TProps) => {
  return (
    <Link href={`/cards/${id}`}>
      <Button className={`white-btn ${s.item}`}>
        <VisaIcon />
        {`**** ${number.slice(-4)}`}
      </Button>
    </Link>
  );
};
