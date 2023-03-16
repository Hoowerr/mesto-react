import React from "react";

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__closed" type="reset" onClick={onClose} />
        <h2 className="popup__header">{title}</h2>
        <form
          action="#"
          name="popup__form"
          className={`popup__form popup__form_${name}`}
          noValidate=""
        >
          {children}
          <button className="popup__button popup__submit-add" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
