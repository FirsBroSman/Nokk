import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function OnePicPage({ user, oneCard }) {
  return (
    <>
      <br />
      <Card style={{ width: '35rem' }}>
        <Card.Img variant="top" src={oneCard.img} />
        <Card.Body>
          <Card.Title>{oneCard.header}</Card.Title>
          <Card.Text>DISCRIPTION {oneCard.discription}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}


// My Nook information buuton/route/3
