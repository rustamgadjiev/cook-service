import { AddressForm } from "@/components/AddressForm/AddressForm";
import { Title } from "@/components/UI/Title/Title";

type TProps = {
  id: string;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  return { props: { id } };
}

const AddressPage = ({ id }: TProps) => {
  return (
    <div className="container">
      <Title>Мои адреса</Title>
      <AddressForm id={+id} />
    </div>
  );
};

export default AddressPage;
