import { useQuery } from '@tanstack/react-query';
import hookAxiosSecure from './hookAxiosSecure';
import UseAuthHook from '../providers/ContexHook/UseAuthHook';


const hookUseCart = () => {
  const backEndServerLink = hookAxiosSecure();
  const {user} = UseAuthHook();
    const {refetch,data: dataFromBackEnd = [] } = useQuery({
      queryKey: ['cart',user?.email],
      staleTime: 0,
      queryFn: async () => {
          const res = await backEndServerLink.get(`carts?email=${user?.email}`);
         return res.data;
    }
  })
    return [dataFromBackEnd, refetch]
};

export default hookUseCart;