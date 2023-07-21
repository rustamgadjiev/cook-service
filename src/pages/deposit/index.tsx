import { Title } from "@/components/UI/Title/Title";
import s from "./deposit.module.scss";
import { DepositInfo } from "@/components/DepositInfo/DepositInfo";

const Deposit = () => {
  return (
    <div className={s.deposit}>
      <div className="container">
        <Title>Депозит</Title>
        <h2>27 580₽</h2>
        <p>на вашем счету</p>
        <DepositInfo />
      </div>
    </div>
  );
};

export default Deposit;
