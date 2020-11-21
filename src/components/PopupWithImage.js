import React from "react";
import popup__closeButtonImage from "../images/__closeButtonImage/popup__closeButtonImage.svg";

class PopupWithImage extends React.Component {

  render() {
    const {
      card,
      card: {link, name} = {link: '', name: ''},
      onClose,
    } = this.props;

    return (
      <div className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
        <button className="popup__closeButton" onClick={onClose}>
          <img className="popup__closeButtonImage" src={popup__closeButtonImage}
               alt="закрыть" />
        </button>
        <figure className="popup__lightBoxContainer">
          <img className="popup__lightBoxImage" src={`${link}`} alt={name}/>
          <figcaption className="popup__lightBoxFigcaption">{name}</figcaption>
        </figure>
      </div>
    )
  }
}

export default PopupWithImage