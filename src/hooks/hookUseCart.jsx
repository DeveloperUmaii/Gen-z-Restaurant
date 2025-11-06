import { useQuery } from '@tanstack/react-query';
import hookAxiosSecure from './hookAxiosSecure';


const hookUseCart = () => {
  const backEndServerLink = hookAxiosSecure();
    const {data: cart=[]} = useQuery({
        queryKey: ['cart'],
    queryFn: async () => {
      const res = await backEndServerLink.get('cart')
      return await response.json()
    })
    return [cart]
};

export default hookUseCart;