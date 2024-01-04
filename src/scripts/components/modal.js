export function openPopup(popup){
    popup.classList.add('popup_is-opened')
}

export function closePopup(evt, popup){
    const target = evt.target
    if(target.classList.contains('popup') || target.nodeName === 'BUTTON' || target.nodeName === 'BODY'){
        popup.classList.remove('popup_is-opened')
    }
}

export function openImagePopup(){
    const imagePopupCont = document.querySelector('.popup_type_image')
    const cardsImages = document.querySelectorAll('.card__image')
    const imagePopupContent = document.querySelector('.popup__image')
    const popupCaption = imagePopupCont.querySelector('.popup__caption')

    cardsImages.forEach((item)=>{
    
        item.addEventListener('click', (evt) => {
            const src = evt.target.getAttribute('src')
            const alt = evt.target.getAttribute('alt')
            imagePopupContent.src = src;
            imagePopupContent.alt = alt;
            popupCaption.textContent = alt;
            if(!evt.target.classList.contains('card__delete-button')){
                openPopup(imagePopupCont)
            }
        })

    })
    document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27){
            closePopup(evt, imagePopupCont)
        }
    })
}