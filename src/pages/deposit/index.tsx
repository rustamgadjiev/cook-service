import { Title } from "@/components/UI/Title/Title";
import s from "./deposit.module.scss";
import { DepositInfo } from "@/components/DepositInfo/DepositInfo";
import { useAppSelector } from "@/store/store";
import { selectDeposit } from "@/store/slices/deposit/deposit";
import Head from "next/head";
import { TITLE } from "@/utils/constants";

const Deposit = () => {
  const deposit = useAppSelector(selectDeposit);

  return (
    <>
      <Head>
        <title>{`${TITLE} | Депозит`}</title>
      </Head>
      <div className={s.deposit}>
        <div className="container">
          <Title>Депозит</Title>
          <h2>{deposit}₽</h2>
          <p>на вашем счету</p>
          <DepositInfo />
        </div>
      </div>
    </>
  );
};

export default Deposit;
