import { formValidationConfig, clearValidation} from "./validation"

export function renderLoading (isLoading, form){
    const currentBtn = form.querySelector('.popup__button')
    isLoading ? currentBtn.textContent = 'Сохранение' : currentBtn.textContent = 'Сохранить'
}


const imagePopup = document.querySelector('.popup_type_image')
const imagePopupImg = imagePopup.querySelector('.popup__image')
const imagePopupCaption = imagePopup.querySelector('.popup__caption')

function handleCardClick(item){
    const src = item.querySelector('img').getAttribute('src')
    const alt = item.querySelector('img').getAttribute('alt')
    imagePopupImg.src = src;
    imagePopupImg.alt = alt;
    imagePopupCaption.textContent = alt;
    openPopup(imagePopup)
}

function handlePopupClick(popup){
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
}

export function openImagePopup(item){
    const currentCardImage = item.querySelector('.card__image')
    currentCardImage.addEventListener('click', () => handleCardClick(item))
}

export function openPopup(popup){
    clearValidation(popup, formValidationConfig)
    document.addEventListener('keydown', handleEscape)
    setTimeout(()=>{popup.classList.add('popup_is-opened')}, 0)
    popup.classList.add('popup_is-animated')
    
}


export function closePopup(popup){
    setTimeout(()=>{popup.classList.remove('popup_is-animated')}, 800)
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

export function closePopups(popups){

    if(popups.length > 1){
        popups.forEach(handlePopupClick)
    }else{
        handlePopupClick(popups)
    } 
}





