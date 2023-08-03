import { CardForm } from "@/components/CardForm/CardForm";
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

const CardPage = ({ id }: TProps) => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Привязанная карта`}</title>
      </Head>
      <div className="container">
        <Title>Visa</Title>
        <CardForm id={+id} />
      </div>
    </>
  );
};

export default CardPage;
