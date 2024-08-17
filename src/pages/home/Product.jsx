import axios from "axios";
import { useEffect, useState } from "react";
import useBrands from "../../hooks/useBrands";
import useCategory from "../../hooks/useCategory";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sort, setSort] = useState('');
    const [categories] = useCategory();
    const [brands] = useBrands();


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products', {
                    params: {
                        keyword,
                        page,
                        brand,
                        category,
                        minPrice,
                        maxPrice,
                        sort
                    }
                });
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [keyword, page, brand, category, minPrice, maxPrice, sort]);

    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 px-2">
            <div className="lg:max-w-[300px] w-full md:max-w-[250px] flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="border p-2 w-full"
                />
                <select className="w-full p-2 border" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose a category</option>
                    {
                        categories.map(category =>
                            <option key={category._id}>{category.categoryName}</option>
                        )
                    }
                </select>
                <select onChange={(e) => setBrand(e.target.value)} className="w-full p-2 border" name="" id="">
                    <option value="">Choose a Brands</option>
                    {
                        brands.map(brand =>
                            <option key={brand._id}>{brand.brandName}</option>
                        )
                    }
                </select>
                <select onChange={(e) => setSort(e.target.value)} className="border p-2">
                    <option value="">Sort by</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="dateDesc">Date Added: Newest first</option>
                </select>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border p-2 w-full"
                    />
                    <input
                        type="number"
                        placeholder="Max price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {products.map((product) => (
                        <div key={product._id} className="rounded-md flex flex-col shadow-md ">
                            <div className="w-full h-[90%] overflow-hidden">
                                <img className='w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110' src={product.productImg} alt="" />
                            </div>
                            <div className="bg-[#f5f8fe] pb-5 px-3">
                                <h2 className="text-xl font-bold pt-3">{product.productName}</h2>
                                <p className="">Brand: {product.brandName}</p>
                                <p className="">Category: {product.productCategory}</p>
                                <p className="text-[#ef8121] text-2xl font-medium">Price: ${product.productPrice}</p>
                            </div>                            
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-around md:justify-normal">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)} className="bg-[#ef8121] px-5 py-2 text-white rounded-l-full mr-2 disabled:cursor-not-allowed ">Previous</button>
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="bg-[#ef8121] px-5 py-2 text-white rounded-r-full mr-2 disabled:cursor-not-allowed">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Product;