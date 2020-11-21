import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";



import React from "react";

function App() {

  const [isEditProfileOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [selectedCard, setSelectedCardPopup] = React.useState(undefined);


  function handleCardClick(card) {
    setSelectedCardPopup(card)
  }

  function handleEditAvatarClick ()  {
    setEditAvatarPopup(true);
  }

  function handleEditProfileClick  ()  {
    setEditProfilePopup(true);
  }

  function handleAddPlaceClick ()  {
    setAddPlacePopup(true);
  }

  function closeAllPopups () {
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setSelectedCardPopup(undefined);
  }

  return (
    <body className="page">

      <Header />
      <Main onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            cardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name={'editAvatar'} title={'Обновить Аватар'} buttonTitle={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__formField">
          <input className="popup__formInputText" id="avatarUrlInput" name="avatar" type="url" placeholder="Ссылка на картинку"
                 required />
          <span className="popup__formInputError" id="avatarUrlInputError">
          </span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'editProfile'} title={'Редактировать Профиль'} buttonTitle={'Cохранить'} isOpen={isEditProfileOpen} onClose={closeAllPopups}>
        <label className="popup__formField">
          <input type="text" title="Имя" placeholder="Имя" id="profileNameInput"
                 className="popup__formInputText popup__formInputText_firstInput"
                 required minLength="2" maxLength="40" />
          <span className="popup__formInputError" id="profileNameInputError">
          </span>
        </label>
        <label className="popup__formField">
          <input type="text" title="О себе" placeholder="О себе" id="profileAboutInput"
                 className="popup__formInputText popup__formInputText_secondInput"
                 required minLength="2" maxLength="200" />
          <span className="popup__formInputError" id="profileAboutInputError">
          </span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'addCard'} title={'Новое Место'} buttonTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__formField">
          <input type="text" title="Название" placeholder="Название" id="placeNameInput"
                 className="popup__formInputText popup__formInputText_firstInput"
                 required minLength="1" maxLength="30" />
          <span className="popup__formInputError" id="placeNameInputError">
          </span>
        </label>
        <label className="popup__formField">
          <input type="url" title="Ссылка на картинку" placeholder="Ссылка на картинку" id="placeUrlInput"
                 className="popup__formInputText popup__formInputText_secondInput"
                 required />
          <span className="popup__formInputError" id="placeUrlInputError">
          </span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'popupDelete'} title={'Вы уверены?'} buttonTitle={'Да'} isOpen={false}>
      </PopupWithForm>

      <PopupWithImage card={selectedCard} onClose={closeAllPopups}/>

    </body>
  );
}

export default App;
