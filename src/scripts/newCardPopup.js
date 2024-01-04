import { openPopup } from "./components/modal"
import { closePopup } from "./components/modal"

const newCardPopup = () => {
    const newCardPopup = document.querySelector('.popup_type_new-card')
    const openNewCardPopupBtn = document.querySelector('.profile__add-button')
    const closePopupBtn = document.querySelector('.popup__close')

    openNewCardPopupBtn.addEventListener('click', () => {
        openPopup(newCardPopup)
    });

    closePopupBtn.addEventListener('click', (evt) => {
        closePopup(evt, newCardPopup)
    })

    newCardPopup.addEventListener('click', (evt) => {
        closePopup(evt, newCardPopup)
    })

    document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27){
            closePopup(evt, newCardPopup)
        }
    })
}

export default newCardPopup