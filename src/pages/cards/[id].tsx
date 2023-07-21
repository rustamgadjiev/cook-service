import { CardForm } from "@/components/CardForm/CardForm";
import { Title } from "@/components/UI/Title/Title";

type TProps = {
  id: string;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  return { props: { id } };
}

const CardPage = ({ id }: TProps) => {
  return (
    <div className="container">
      <Title>Visa</Title>
      <CardForm id={+id} />
    </div>
  );
};

export default CardPage;
