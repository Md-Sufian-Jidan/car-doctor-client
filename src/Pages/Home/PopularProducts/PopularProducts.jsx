import { useEffect, useState } from "react";
import PopularProductsCard from "./PopularProductsCard";

const PopularProducts = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="my-4">
            <div className="text-center">
                <h3 className="text-[#ff3811] font-bold">Popular Products</h3>
                <h3 className="text-3xl">Browse Our Products</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            {/* <p>{products?.length}</p> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    products?.map((product) => <PopularProductsCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;