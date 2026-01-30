import { useQuery } from "@tanstack/react-query";
import hookAxiosSecure from "./hookAxiosSecure";

const useMenu = () => {
  const axiosSecure = hookAxiosSecure();

  const { data: menu = [], isPending: loading , refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
