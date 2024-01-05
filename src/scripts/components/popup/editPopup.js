import { openPopup, closePopup, closeModalByEsc } from "../modal";


const editPopup = (popup, openBtn) => {

    openBtn.addEventListener('click', () => {
        openPopup(popup)
    });

    popup.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(evt, popup)
        }
    })

    closeModalByEsc(popup)

}

export default editPopup






