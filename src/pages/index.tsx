import { Slider } from "@/components/Slider/Slider";
import { FoodItems } from "@/components/FoodItems/FoodItems";
import { Filter } from "@/components/Filter/Filter";

export default function Home() {
  return (
    <>
      <Slider />
      <Filter />
      <FoodItems />
    </>
  );
}
