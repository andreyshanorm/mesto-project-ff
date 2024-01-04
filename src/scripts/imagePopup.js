import { closePopup } from "./components/modal"
import { openImagePopup } from "./components/modal"


const imagePopup = () => {
    const imagePopupCont = document.querySelector('.popup_type_image')
    const closePopupBtn = imagePopupCont.querySelector('.popup__close')


    openImagePopup()

    closePopupBtn.addEventListener('click', (evt) => {
        closePopup(evt, imagePopupCont)
    })

    imagePopupCont.addEventListener('click', (evt) => {
        closePopup(evt, imagePopupCont)
    })

}

export default imagePopup