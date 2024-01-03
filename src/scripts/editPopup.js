import { openPopup } from "./components/modal"
import { closePopup } from "./components/modal"


const editPopup = () => {
    const editPopup = document.querySelector('.popup_type_edit')
    const openEditPopupBtn = document.querySelector('.profile__edit-button')
    const closePopupBtn = document.querySelector('.popup__close')

    openEditPopupBtn.addEventListener('click', () => {
        openPopup(editPopup)
    });

    closePopupBtn.addEventListener('click', (evt) => {
        closePopup(evt, editPopup)
    })
    editPopup.addEventListener('click', (evt) => {
        closePopup(evt, editPopup)
    })

}

export default editPopup






