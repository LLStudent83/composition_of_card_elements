/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../card/Card';
import './cardTextStyle.css';

function CardText() {
  return (
    <Card>
      <h5 className="CardText__title">Card title</h5>
      <p className="CardText__text">
        Some quick example text to build
        on the card title and make up the
        bulk of the card's content.
      </p>
    </Card>
  );
}
export default CardText;
