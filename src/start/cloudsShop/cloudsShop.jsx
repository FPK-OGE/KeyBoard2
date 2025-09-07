import React from "react";
import whiteBackground from "../../img/Облочка типо корзина.svg";
import shop from "../../img/Shopping Cart.svg";
import styles from "../../css/style.module.css";

const CloudsShop = ({ active, setActive }) => {
  return (
    <div
      className={active ? styles.mainCloudactive : styles.mainCloud}
      onClick={() => setActive(prev => !prev)}
    >
      <img src={shop} alt="shop" className={styles.shop} />
      <img src={whiteBackground} alt="cloud" className={styles.cloud} />
    </div>
  );
};

export default CloudsShop;
