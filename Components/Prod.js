import React from "react";
import NewsData from "../data/data.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
export default function Prod(props) {
    return(
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={NewsData.products[props.id].img} />
        <Card.Body>
          <Card.Title>{NewsData.products[props.id].title}</Card.Title>
          <Card.Text>
            <p> {NewsData.products[props.id].price} </p>
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
}