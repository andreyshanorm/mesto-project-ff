import { openPopup, closePopup, closeModalByEsc } from "../modal";
import { addCardFormVar } from "../../constants";

const newCardPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        addCardFormVar.reset()
        openPopup(popup)
    });

    popup.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(evt, popup)
        }
    })

    closeModalByEsc(popup)

}

export default newCardPopup