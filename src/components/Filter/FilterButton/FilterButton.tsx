import {
  selectFilter,
  setSelectedFilterId,
} from "@/store/slices/filter/filter";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Button } from "../../UI/Button/Button";

type TProps = {
  item: string;
  i: number;
  active: string;
};

export const FilterButton = ({ item, i, active }: TProps) => {
  const selectedFilterId = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const handleButtonClick = (i: number) => {
    dispatch(setSelectedFilterId(i));
  };

  return (
    <Button
      className={selectedFilterId === i ? `${active} white-btn` : "white-btn"}
      onClick={() => handleButtonClick(i)}
    >
      {item}
    </Button>
  );
};
