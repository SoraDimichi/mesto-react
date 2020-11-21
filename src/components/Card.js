import React from "react";
import card__removeButton from '../images/__removeButtonImage/card__removeButtonImage.svg';


class Card extends React.Component {

  handleCardClick = () => {
    this.props.onCardClick(this.props.card)
  }

  render() {
    const {card} = this.props;
    return (
      <li className="card">
        <button className="card__removeButton">
          <img className="card__removeButtonImage" src={card__removeButton}
               alt="Удалить" />
        </button>
        <div className="card__imageContainer"
             style={{ backgroundImage: `url('${card.link}')` }}

             onClick={this.handleCardClick}
        />
        <p className="card__title">{card.name}</p>
        <button className="card__likeButton">
        </button>
        <p className="card__likeCounter">{card.likes.length}</p>
      </li>
    )
  }
}

export default Card