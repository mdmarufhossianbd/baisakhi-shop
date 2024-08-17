import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCategory = () => {
    const {data : categories = [], isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://baishakhi-shop-backend.vercel.app/categoires')
            return res.data;
        }
    });
    return [categories, isLoading, refetch]
};

export default useCategory;