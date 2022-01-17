import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          name={product.name}
          price={product.price}
          img={product.img}
          key={product.key}
        ></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
