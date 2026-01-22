import { useQuery } from "@tanstack/react-query";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import hookAxiosSecure from "./hookAxiosSecure";
    // (make_admin step-2 in clien Side)(no.2)

    const hookAdmin = () => {
    const { user, loading } = UseAuthHook(); // loading টাও নিতে পারো
    const backEndServerLink = hookAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        // user?.email থাকলেই কেবল কুয়েরি চলবে
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email, 
        queryFn: async () => {
            const res = await backEndServerLink.get(`/user/admin/${user.email}`);
            console.log("Admin Check Response:", res.data);
            return res.data?.admin; 
        }
    });

    return [isAdmin, isAdminLoading];
};

export default hookAdmin;