
export function openPopup(popup){
    setTimeout(()=>{popup.classList.add('popup_is-opened')}, 0)
    popup.classList.add('popup_is-animated')
}

export function closeModalByEsc(popup){
    document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27){
            closePopup(evt, popup)
        }
        document.removeEventListener('keydown', closeModalByEsc)
    })
}

export function closePopup(evt, popup){
    const target = evt.target
    if(target.classList.contains('popup') || target.nodeName === 'BUTTON' || target.nodeName === 'BODY'){
        setTimeout(()=>{popup.classList.remove('popup_is-animated')}, 600)
        popup.classList.remove('popup_is-opened')
    }
}

export function openImagePopup(item){

    const imagePopup = document.querySelector('.popup_type_image')
    const imagePopupImg = imagePopup.querySelector('.popup__image')
    const imagePopupCaption = imagePopup.querySelector('.popup__caption')

    item.addEventListener('click', (evt) => {
        if(!(evt.target.classList.contains('card__delete-button') || evt.target.classList.contains('card__like-button'))){
            const clickedItem = evt.target.offsetParent;
            const currentCardImage = clickedItem.querySelector('.card__image')
            const src = currentCardImage.getAttribute('src')
            const alt = currentCardImage.getAttribute('alt')
            imagePopupImg.src = src;
            imagePopupImg.alt = alt;
            imagePopupCaption.textContent = alt;
            openPopup(imagePopup)
        }
    })

    imagePopup.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(evt, imagePopup)
        }
    })
    closeModalByEsc(imagePopup)

}

