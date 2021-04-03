/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$ </strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon style={{ color: "gold" }} />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button className="button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}
export default Product;
