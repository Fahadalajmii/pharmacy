import React from "react";

const ProductItem = (props) => {
  console.log(props);
  return (
    <div className="product">
      <h5>{props.name}</h5>
      <p>{props.price}</p>
      <img src={props.img}></img>
    </div>
  );
};

export default ProductItem;
