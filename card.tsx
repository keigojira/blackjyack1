import React from 'react';

type CardProps = {
  value: string;
  suit: string;
  hidden?: boolean;
};

const Card: React.FC<CardProps> = ({ value, suit, hidden }) => {
  const suitMap: { [key: string]: string } = {
    '♠': 'S',
    '♥': 'H',
    '♦': 'D',
    '♣': 'C',
  };

  const cardCode = `${value}${suitMap[suit]}`;
  const cardImage = hidden ? '/cards/back.png' : `/cards/${cardCode}.png`;

  return <img src={cardImage} alt={`${value}${suit}`} style={{ width: '80px', margin: '0 5px' }} />;
};

export default Card;
