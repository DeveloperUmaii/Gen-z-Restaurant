import { useQuery } from "@tanstack/react-query";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import hookAxiosSecure, { backEndServerLink } from "./hookAxiosSecure";
    // (make_admin step-2 in clien Side)(no.2)
const hookAdmin = () => {
    const {user} = UseAuthHook()
    const backEndServerLink = hookAxiosSecure()
    const { data: isAdmin, isPending: isAdminLoading, } = useQuery( {
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await backEndServerLink.get(`/user/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
   return [isAdmin]
};

export default hookAdmin;