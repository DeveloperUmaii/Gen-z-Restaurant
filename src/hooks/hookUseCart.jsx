import { useQuery } from '@tanstack/react-query';
import hookAxiosSecure from './hookAxiosSecure';
import UseAuthHook from '../providers/ContexHook/UseAuthHook';


const hookUseCart = () => {
  const axiosSecure = hookAxiosSecure();
  const {user, loading} = UseAuthHook();
  console.log()
    const {refetch,data: dataFromBackEnd = [] } = useQuery({
      queryKey: ['cart',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
          const res = await axiosSecure.get(`/carts/${user?.email}`);
         return res.data;
    }
  })
    return [dataFromBackEnd, refetch]
};

export default hookUseCart;