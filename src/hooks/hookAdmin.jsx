import { useQuery } from "@tanstack/react-query";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import hookAxiosSecure from "./hookAxiosSecure";
// (make_admin step-2 in clien Side)(no.2)

const hookAdmin = () => {
  const { user, loading } = UseAuthHook(); 
  // 🆕 loading নেওয়া হলো
  // 📝 কারণ: user এখনো Firebase থেকে load হচ্ছে কিনা সেটা জানার জন্য

  const backEndServerLink = hookAxiosSecure();

  const {
    data: isAdmin = false, 
    // 🆕 default false দেওয়া হলো
    // 📝 কারণ: undefined হলে UI ভেঙে যায়, false safer

    isPending: isAdminLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    // 🆕 queryKey এ email যুক্ত
    // 📝 কারণ: user change হলে নতুন করে admin check হবে

    enabled: !loading && !!user?.email,
    // 🆕 enabled condition
    // 📝 কারণ: 
    // 1️⃣ Firebase auth loading শেষ হতে হবে
    // 2️⃣ user.email থাকতে হবে
    // না হলে API call হবে না

    queryFn: async () => {
      const res = await backEndServerLink.get(
        `/user/admin/${user.email}`
      );
      // console.log("Admin Check Response:", res.data);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default hookAdmin;