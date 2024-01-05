import { openPopup } from "./components/modal"
import { closePopup } from "./components/modal"
import { closeModalByEsc } from "./components/modal"

const editPopup = () => {
    const editPopup = document.querySelector('.popup_type_edit')
    const openEditPopupBtn = document.querySelector('.profile__edit-button')

    openEditPopupBtn.addEventListener('click', () => {
        openPopup(editPopup)
    });

    editPopup.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(evt, editPopup)
        }
    })

    closeModalByEsc(editPopup)

}

export default editPopup






