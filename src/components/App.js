import React from "react";

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import ImagePopup from "./ImagePopup";

import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/api"

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

  const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState(undefined);

  function handleEditProfileClick  ()  {
    setIsEditProfilePopupOpen(true);
  }

  const handleUpdateUser = (data) => {
    api.patchUserInfo(data).then((result) => {
      setUserInfo(result);
      closeAllPopups();
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }

  function handleEditAvatarClick ()  {
    setIsEditAvatarPopupOpen(true);
  }

  const handleUpdateAvatar = (data) => {
    api.patchUserAvatar(data).then((result) => {
      setUserInfo(result);
      closeAllPopups();
    }).catch((err) => new Error(`Ошибка: ${err}`))
  }

  function handleAddPlaceClick ()  {
    setIsAddPlacePopupOpen(true);
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
    setIsSelectedCard(card)
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsSelectedCard(undefined);
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

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
        />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
