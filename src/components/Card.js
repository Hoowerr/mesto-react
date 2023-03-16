import React from "react";

function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__info">
        <button className="element__delete" type="button"></button>
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-count">{card.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
