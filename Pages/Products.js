import React from "react";
import { CardDeck } from "react-bootstrap";
import NewsData from "../data/data.json";
import Prod from "../Components/Prod.js";
export default function Products() {
  return (
    <div>
      <h1> Products </h1>
       <CardDeck>
        {NewsData.products.map((products, index) => {
          return <Prod id={index} />;
        })}
      </CardDeck>
    </div>
  );
}
