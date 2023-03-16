import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([info, cards]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button
              className="profile__avatar-button"
              type="button"
              id="profile__avatar-btn"
              onClick={onEditAvatar}
            >
              <img src={userAvatar} alt="аватар" className="profile__avatar" />
            </button>
            <div className="profile__info">
              <div className="profile__main">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
              </div>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              />
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            onClick={onAddPlace}
          />
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card
              name={card.name}
              likes={card.likes.length}
              link={card.link}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
export default Main;
