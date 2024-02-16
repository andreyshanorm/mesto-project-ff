import { newCardPopupVar, addCardFormVar } from "../../constants";
import { closePopup } from "../modal";
import { addCard } from "../api";
import { renderLoading } from "../../..";
import { cardContainer } from "../../createCards";
import { openImagePopup } from "../../..";
import { deleteCard, likeCard, createCard } from "../card";


export function handleCardForm(form) {
  const addCardNameInput = form.querySelector(".popup__input_type_card-name");
  const addCardLinkInput = form.querySelector(".popup__input_type_url");
  form.addEventListener("submit", (evt) => {
    renderLoading(true, form);
    evt.preventDefault();
    const data = {
      name: addCardNameInput.value,
      link: addCardLinkInput.value,
    };
    addCard(data.name, data.link)
    .then((data) => {
      cardContainer.prepend(createCard(data, {deleteCard, likeCard, openImagePopup}, data.owner._id))
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      renderLoading(false, form);
    });

    
    closePopup(newCardPopupVar);
  });
}

export function clearInputs(form) {
  form.reset();
}
