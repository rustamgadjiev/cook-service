import { Slider } from "@/components/Slider/Slider";
import { Filter } from "@/components/Filter/Filter";
import { FoodItems } from "@/components/FoodItems/FoodItems";

export default function Home() {
  return (
    <>
      <Slider />
      <Filter />
      <FoodItems />
    </>
  );
}
