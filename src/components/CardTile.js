import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class CardTile extends Component {
  render() {
    return (
      <div>
        <Card
          text="white"
          style={{
            width: "18rem",
            padding: "10px",
            "background-color": "#F1295C"
          }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardTile;
