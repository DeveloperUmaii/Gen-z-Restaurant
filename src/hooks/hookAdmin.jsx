import { useQuery } from "@tanstack/react-query";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import hookAxiosSecure from "./hookAxiosSecure";
// (make_admin step-2 in clien Side)(no.2)

const hookAdmin = () => {
  const { user, loading } = UseAuthHook(); 
  // 🆕 loading নেওয়া হলো
  // 📝 কারণ: user এখনো Firebase থেকে load হচ্ছে কিনা সেটা জানার জন্য

  const axiosSecure = hookAxiosSecure();

  const { data: isAdmin = false, isPending: isAdminLoading, } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default hookAdmin;