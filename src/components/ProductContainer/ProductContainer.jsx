import React from "react";
import ProductImages from "./ProductImages";
import "./ProductContainer.scss";
import ProductInfo from "./ProductInfo";

const ProductContainer = () => {
  return (
    <section className="product-container">
      <div className="path">
        <span>
          <a href="#">Головна</a>
        </span>
        <span>
          <a href="#"> - Чоловіки</a>
        </span>
        <span>
          <a href="#"> - Одяг</a>
        </span>
        <span>
          <a href="#"> - Термобілизна</a>
        </span>
        <span>
          <a href="#"> - Atlantic</a>
        </span>
        <span>
          <a href="#"> - Чоловічий термокостюм atlantic MW0MW32780</a>
        </span>
      </div>
      <ProductImages />
      <ProductInfo />
    </section>
  );
};

export default ProductContainer;
