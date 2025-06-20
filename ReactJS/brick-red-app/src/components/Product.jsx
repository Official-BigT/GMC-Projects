import React from "react";
import styles from './styles.module.css';
import bigtLogo from "../assets/bigt logo.png";

function Card(props) {
  return (
    <>
    <div className={styles.card}>
      <h2>This is the {props.toy.name}</h2>
      <img src={bigtLogo} alt="BigT logo" />
      <p>For copyright usage report to the hotlines for inquiry and patent right holding for the sum of <b><i>{props.toy.price}</i></b></p>
    </div>
    </>
  );
}

const Product = () => {
  const myToy = {
    name: "BigT Logo",
    price: "$" + 30,
    description: "It's a rounded block shaped cube",
    picture: bigtLogo,
  };
  return (
    <div>
      <Card toy={myToy} />
    </div>
  );
};

export default Product;
