import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Product({ id, title, image, price, rating }) {
  const [loading, setLoading] = useState(false);
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log(basket);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>
        {loading && <i className="spinner-border spinner-border-sm"></i>}
        {loading && <span>Adding to cart</span>}
        {!loading && <span>Add to cart</span>}
      </button>
    </div>
  );
}

export default Product;
