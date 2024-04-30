import React, {FC, useEffect, useState} from "react";
import IProducts from "../../model/IProducts";
import {Product} from "../Product/Product";
import {getProducts} from "../../services/products.service";

const Products: FC = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        getProducts()
            .then(value => {
                setProducts(value)
            })
    }, []);


    return (
        <div>
            {
                products.map(product =>
                    <Product
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        stock={product.stock}
                        brand={product.brand}
                        category={product.category}
                        // thumbnail={product.thumbnail}
                        images={product.images}
                    />)
            }
        </div>
    );
};

export {Products};