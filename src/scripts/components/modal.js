import { clearValidation} from "./validation"
import { formValidationConfig } from "./validationConfig"

export function handlePopupClick(popup){
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
}

export function openPopup(popup){
    clearValidation(popup, formValidationConfig)
    document.addEventListener('keydown', handleEscape)
    setTimeout(()=>{popup.classList.add('popup_is-opened')}, 0)
    popup.classList.add('popup_is-animated')
    
}

export function closePopup(popup){
    setTimeout(()=>{popup.classList.remove('popup_is-animated')}, 1200)
    popup.classList.remove('popup_is-opened')
    clearValidation(popup, formValidationConfig)
    document.removeEventListener('keydown', handleEscape)
}

export function handleEscape(evt){
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened') 
            closePopup(openedPopup)
      }
}







