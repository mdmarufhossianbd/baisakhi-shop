import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBrands = () => {
    const {data : brands = [], isLoading, refetch} = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/brands')
            return res.data
        }
    })
    return [brands, isLoading, refetch];
};

export default useBrands;