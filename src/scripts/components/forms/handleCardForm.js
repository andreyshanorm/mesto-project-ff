import { newCardPopupVar, addCardFormVar } from "../../constants";
import { closePopup } from "../modal";
import { addCard, apiConfig } from "../api";
import { renderLoading } from "../modal";
import { formValidationConfig } from "../validation";

export function handleCardForm(form) {
  const addCardNameInput = form.querySelector(".popup__input_type_card-name");
  const addCardLinkInput = form.querySelector(".popup__input_type_url");
  addCardNameInput.value = "";
  form.addEventListener("submit", (evt) => {
    renderLoading(true, form);
    evt.preventDefault();
    const data = {
      name: addCardNameInput.value,
      link: addCardLinkInput.value,
    };
    addCard(data.name, data.link, apiConfig).finally(() => {
      renderLoading(false, form);
    });

    addCardFormVar.reset();
    closePopup(newCardPopupVar);
    setTimeout(() => location.reload(), 200);
  });
}

export function clearInputs(form) {
  const addCardNameInput = form.querySelector(".popup__input_type_card-name");
  const addCardLinkInput = form.querySelector(".popup__input_type_url");
  addCardNameInput.value = "";
  addCardLinkInput.value = "";
}
