import { openPopup } from "./components/modal"
import { closePopup } from "./components/modal"
import { closeModalByEsc } from "./components/modal"

import { addCardFormVar } from "./components/forms/addCardForm"

const newCardPopup = () => {
    const newCardPopup = document.querySelector('.popup_type_new-card')
    const openNewCardPopupBtn = document.querySelector('.profile__add-button')

    openNewCardPopupBtn.addEventListener('click', () => {
        addCardFormVar.reset()
        openPopup(newCardPopup)
    });

    newCardPopup.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(evt, newCardPopup)
        }
    })

    closeModalByEsc(newCardPopup)

}

export default newCardPopup