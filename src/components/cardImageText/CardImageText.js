/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../card/Card';
import ImgComp from '../imgComp/ImgComp';
import './cardImageTextStyle.css';

function CardImageText() {
  return (
    <Card ImgComp={<ImgComp imgSrc="https://sun9-43.userapi.com/c5852/u74644756/155204589/y_661d25d3.jpg" />}>
      <h5 className="CardText__title">Card title</h5>
      <p className="CardText__text">
        Some quick example text to build
        on the card title and make up the
        bulk of the card's content.
      </p>
    </Card>
  );
}

export default CardImageText;
// img="C:/Users/prigu/Documents/Frontend/React/homework/composition_of_card_elements/img/kote.jpg"
