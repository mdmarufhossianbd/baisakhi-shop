import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBrands = () => {
    const {data : brands = [], isLoading, refetch} = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await axios.get('https://baishakhi-shop-backend.vercel.app/brands')
            return res.data
        }
    })
    return [brands, isLoading, refetch];
};

export default useBrands;