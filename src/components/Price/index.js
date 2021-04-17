import React from "react";

const Prices = () => {
  return (
    <>
      <div className="price-container" id="prices">
        <div className="price-content">
          <h3 className="price-content__title">Prices</h3>
          <div className="price-content__price">
            <img src=" images/price_1.jpg" alt="price one" />
            <h4>Gym</h4>
            <h5>30$/Month</h5>
          </div>
          <div className="price-content__price">
            <img src="images/price_2.jpg" alt="price two" />
            <h4>Spining</h4>
            <h5>25$/Month</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
