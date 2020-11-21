import React from "react";
import popup__closeButtonImage from '../images/__closeButtonImage/popup__closeButtonImage.svg';


class PopupWithForm extends React.Component {

  render() {
    const {buttonTitle, onClose, children, name, title, isOpen} = this.props;
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <button className="popup__closeButton" onClick={onClose}>
        <img className="popup__closeButtonImage" src={popup__closeButtonImage}
             alt="закрыть" />
        </button>
          <form className="popup__form" noValidate>
            <fieldset className="popup__formFieldSet" name={name}>
              <legend className="popup__formTitle">{title}</legend>
              {children}
              <input type="submit" title="Сохранить" value={buttonTitle}
                     className="popup__formSubmitButton"/>
            </fieldset>
          </form>
      </div>
    )
  }
}

export default PopupWithForm