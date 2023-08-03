import { AddressForm } from "@/components/AddressForm/AddressForm";
import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import Head from "next/head";

type TProps = {
  id: string;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  return { props: { id } };
}

const AddressPage = ({ id }: TProps) => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Мой адрес`}</title>
      </Head>
      <div className="container">
        <Title>Мой адрес</Title>
        <AddressForm id={+id} />
      </div>
    </>
  );
};

export default AddressPage;
