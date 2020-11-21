import React from "react";

import profile__editButton from '../images/__editButton/profile__editButton.svg';
import profile__editAvatar from '../images/__avatar/profile__avatarButton.svg';

import Card from "./Card";
import {api} from "../utils/Api";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    }
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(),api.getInitialCards()])
      .then(([userData, cards]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: cards,
        })
      }).catch((err) => new Error(`Ошибка: ${err}`)
    )
  }

  render () {
    const {cardClick, onAddPlace, onEditProfile, onEditAvatar} = this.props;
    const {userName, userAvatar, cards, userDescription} = this.state;
    return(
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url('${userAvatar}')` }} />
        <button className="profile__avatarButton" onClick={onEditAvatar} >
          <img src={profile__editAvatar} alt="изменить" />
        </button>

        <h1 className="profile__name">{userName}</h1>
        <p className="profile__about">{userDescription}</p>
        <button className="profile__openPopupButton" onClick={onEditProfile}>
          <img className="profile__openPopupButtonImage" src={profile__editButton}
               alt="Отредактировать" />
        </button>
        <button className="profile__addButton" onClick={onAddPlace}>
          +
        </button>
      </section>

      <ul className="cards">
        {cards.map((card) => <Card card={card} key={card._id} onCardClick={cardClick} />) }
      </ul>

    </main>
  )
  }
}

export default Main