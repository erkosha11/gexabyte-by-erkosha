import React from 'react';
import s from "./Products.module.scss";
import productData from "./products.json";

export const Products = () => {
  return (
    <div className={s.products}>
      <div className="container">
        <div className={s.productsContent}>
          <div className={s.productsTitle}>
            <h2>доверьтесь нам для решения ваших задач</h2>
            <div className={s.productsCards}>
              {productData.products.map((product, index) => (
                <div key={index} className={s.productsCard}>
                  <div
                    className={`${s.productsCardTitle} ${
                      index % 2 === 0 ? s.productsCardPurple : ""
                    }`}
                  >
                    <h4>{product.title}</h4>
                  </div>
                  <div className={s.productsCardText}>
                    {product.text.map((item, i) => (
                      <React.Fragment key={i}>
                        <p>{item}</p>
                        <span key={`span-${i}`}></span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
