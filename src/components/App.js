import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div>
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          name="popup_prof"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-input popup__input popup__input_edit_name"
            type="text"
            placeholder="Имя"
            id="Name"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error NameInputId-error" />
          <input
            className="popup__form-input popup__input popup__input_edit_job"
            type="text"
            placeholder="Деятельность"
            id="JobInputId"
            name="description"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error JobInputId-error" />
        </PopupWithForm>

        <PopupWithForm
          name="popup_add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-input popup__add-name popup__input"
            type="text"
            placeholder="Название"
            id="AddNameInputId"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error AddNameInputId-error" />
          <input
            className="popup__form-input popup__add-url popup__input"
            type="url"
            placeholder="Ссылка на картинку"
            id="inputImgUrl"
            name="link"
            required
          />
          <span className="popup__input-error inputImgUrl-error" />
        </PopupWithForm>

        <PopupWithForm
          name="popup_add-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-input popup__add-url popup__input"
            type="url"
            placeholder="Ссылка на картинку"
            id="inputAvatarUrl"
            name="link"
            required
          />
          <span className="popup__input-error inputAvatarUrl-error" />
        </PopupWithForm>

        <PopupWithForm
          name="popup_gallery-delete"
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
      <template id="idElements"></template>
    </div>
  );
}

export default App;
