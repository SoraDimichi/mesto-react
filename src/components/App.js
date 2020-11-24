import React from "react";

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import PopupWithImage from "./PopupWithImage";

import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/Api"

function App() {

  const [currentUser, setUserInfo] = React.useState({
    name:'',
    about:'',
    avatar:'',
    _id:'',
  });

  const [cards, setCards] = React.useState([]);

  React.useEffect( () => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([userData, initialCards]) => {
      setUserInfo(userData);
      setCards(initialCards);
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }, [])

  const [isEditProfileOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [selectedCard, setSelectedCardPopup] = React.useState(undefined);

  function handleEditProfileClick  ()  {
    setEditProfilePopup(true);
  }

  const handleUpdateUser = (data) => {
    api.patchUserInfo(data).then((result) => {
      setUserInfo(result);
      closeAllPopups();
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }

  function handleEditAvatarClick ()  {
    setEditAvatarPopup(true);
  }

  const handleUpdateAvatar = (data) => {
    api.patchUserAvatar(data).then((result) => {
      setUserInfo(result);
      closeAllPopups();
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }

  function handleAddPlaceClick ()  {
    setAddPlacePopup(true);
  }

  const handleAddPlaceSubmit = (data) => {
    api.postNewCard(data).then((newCard) => {
      setCards([newCard,...cards]);
      closeAllPopups();
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }

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

  function handleCardClick(card) {
    setSelectedCardPopup(card)
  }

  function closeAllPopups () {
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setSelectedCardPopup(undefined);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header />
        <Main onAddPlace={handleAddPlaceClick}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}

              cards={cards}
              setCards={setCards}/>
        <Footer />

        <EditProfilePopup isOpen={isEditProfileOpen}
                          onClose={closeAllPopups}
                          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                         onClose={closeAllPopups}
                         onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
                       onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithImage card={selectedCard}
                        onClose={closeAllPopups}
        />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
