import React from "react";

const Buy = () => {
  return (
    <div className="body">
      <div className="name">Stock</div>
      <div className="item">
        <img src="/images/flower.jpg" alt="상품" />
        <div className="buy-box">
          <div className="price">30,000원</div>
          <div className="button-box">
            <button className="button-buy">구입</button>
            <button className="button-bag">장바구니</button>
            <button className="button-like">like</button>
          </div>
        </div>
      </div>
      <div className="item-description">sadfsd</div>
    </div>
  );
};

export default Buy;
