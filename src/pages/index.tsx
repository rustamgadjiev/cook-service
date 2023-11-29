import { Slider } from "@/components/Slider/Slider";
import { FoodItems } from "@/components/FoodItems/FoodItems";
import { Filter } from "@/components/Filter/Filter";
import { FOODS_URL_API } from "@/utils/constants";
import { TFoods } from "@/store/slices/foods/types";

export default function Home({data}: {data: TFoods[]}) {
  return (
    <>
      <Slider />
      <Filter />
      <FoodItems data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(FOODS_URL_API)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}