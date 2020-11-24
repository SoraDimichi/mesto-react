import React from "react";

import profile__editButton from '../images/__editButton/profile__editButton.svg';
import profile__editAvatar from '../images/__avatar/profile__avatarButton.svg';
import {api} from '../utils/Api'

import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main ({onEditAvatar, onEditProfile, onAddPlace, setCards, cards, cardClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  const {name, about, avatar} = currentUser;

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api.like(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((cardIsLiked) => {
        return cardIsLiked._id === card._id ? newCard : cardIsLiked;
      });
      setCards(newCards);
    }).catch((err) => new Error(`Ошибка: ${err}`));
  };

  const handleDeleteCard = (card) => {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(cardIsDeleted => cardIsDeleted._id !== card._id);
      setCards(newCards);
    }).catch((err) => new Error(`Ошибка: ${err}`));
  }

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url('${avatar}')` }} />
        <button className="profile__avatarButton" onClick={onEditAvatar} >
          <img src={profile__editAvatar} alt="изменить" />
        </button>

        <h1 className="profile__name">{name}</h1>
        <p className="profile__about">{about}</p>
        <button className="profile__openPopupButton" onClick={onEditProfile}>
          <img className="profile__openPopupButtonImage" src={profile__editButton}
               alt="Отредактировать" />
        </button>
        <button className="profile__addButton" onClick={onAddPlace}>
          +
        </button>
      </section>

      <ul className="cards">
        {cards.map((card) =>
          <Card card={card}
                key={card._id}
                onCardClick={cardClick}
                onCardLike={handleCardLike}
                onDeleteCard={handleDeleteCard}/>)
        }
      </ul>

    </main>
  )
}

export default Main