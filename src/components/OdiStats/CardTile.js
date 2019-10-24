import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Container, Button } from "react-bootstrap";

const styles={
  containerClass:{"height":"100px", "width":"100px"}
}

export class CardTile extends Component {
  render() {
    return (
      <div>
        
        <Card
          text="white"
          style={{
            height:'10rem',
            width: "12rem",
            padding: "18px",
            "background-color": "#F1295C"
          }}
        >
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Body>
            <Card.Title><h2>{this.props.info}</h2></Card.Title>
            
          </Card.Body>
        </Card>
        
      </div>
    );
  }
}

export default CardTile;
