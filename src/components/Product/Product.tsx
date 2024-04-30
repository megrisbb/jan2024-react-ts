import React, {FC, ReactNode} from "react";

import IProducts from "../../model/IProducts";
import styles from "./Product.module.css"

export type ProductComponentsWithChildren<T> = T & { children?: ReactNode }
const Product: FC<ProductComponentsWithChildren<IProducts>> = ({title, description, price,discountPercentage,rating,stock,brand,category,images}) => {
    return (
        <div className={styles.productBlock}>
            <h2>{title}</h2>
            <div>Description: {description}</div>
            <div>Price: {price}$</div>
            <div>Discount percentage: {discountPercentage}</div>
            <div>Rating: {rating}</div>
            <div>Stock: {stock}</div>
            <div>Brand: {brand}</div>
            <div>Category: {category}</div>
            {/*<div>{thumbnail}</div>*/}
            <div className={styles.productBlockImage}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={title} />
                ))}
            </div>
            <br/>
        </div>
    );
};

export {Product};