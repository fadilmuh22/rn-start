import { useQuery } from "@tanstack/react-query";
import { getPing } from "../queries";

export const usePing = () => {
  return useQuery({
    queryFn: () => getPing(),
  });
};
