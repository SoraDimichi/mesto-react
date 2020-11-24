import React from "react";
import card__deleteButtonImage from '../images/__deleteButtonImage/card__deleteButtonImage.svg';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card ({onCardClick, onCardLike, onCardDelete, card}) {

  const {name = '', link = '', likes = []} = card;

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`card__deleteButton${isOwn ? '' : ' card__deleteButton_hidden'}`);

  const isLiked = likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = (`card__likeButton${isLiked ? ' card__likeButton_active' : ''}`);

  const CardClick = () => onCardClick(card);
  const CardLike = () => onCardLike(card);
  const CardDelete = () => onCardDelete(card);

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} onClick={CardDelete}>
        <img className="card__deleteButtonImage" src={card__deleteButtonImage} alt="Удалить" />
      </button>
      <div className="card__imageContainer"
           style={{ backgroundImage: `url('${link}')` }}
           onClick={CardClick}
      />
      <p className="card__title">{name}</p>
      <button className={cardLikeButtonClassName} onClick={CardLike}>
      </button>
      <p className="card__likeCounter">{likes.length}</p>
    </li>
  )
}

export default Card