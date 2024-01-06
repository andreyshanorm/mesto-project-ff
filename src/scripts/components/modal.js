import { handleEscape } from "./popup/closePopup"


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


export function openImagePopup(item){
    const currentCardImage = item.querySelector('.card__image')
    currentCardImage.addEventListener('click', () => handleCardClick(item))
}

export function openPopup(popup){
    document.addEventListener('keydown', handleEscape)
    setTimeout(()=>{popup.classList.add('popup_is-opened')}, 0)
    popup.classList.add('popup_is-animated')
}







