import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarInput = React.useRef();

  const [value, setValue] = React.useState('');

  const handleChange = (evt) => setValue(evt.target.value);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
    evt.target.reset();
  }

  React.useEffect(() => {
    avatarInput.current.value = '';
  },[onClose])

  return (

    <PopupWithForm name={'editAvatar'}
                   title={'Обновить Аватар'}
                   buttonTitle={'Сохранить'}
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
    >
      <label className="popup__formField">
        <input type="url" required
               title="Ссылка на картинку"
               placeholder="Ссылка на картинку"
               id="avatarUrlInput"
               className="popup__formInputText"
               ref={avatarInput}
               value={value}
               onChange={(evt) => handleChange(evt)}
        />
        <span className="popup__formInputError" id="avatarUrlInputError">
        </span>
      </label>
    </PopupWithForm>

  );
}

export default EditAvatarPopup;