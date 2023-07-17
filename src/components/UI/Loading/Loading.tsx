import { Skeleton } from "@/components/Skeleton/Skeleton";

type TProps = {
  isLoading: boolean;
  children: any;
};

export const Loading = ({ isLoading, children }: TProps) => {
  return isLoading
    ? [...new Array(6)].map((_, pos) => <Skeleton key={pos} />)
    : children;
};
