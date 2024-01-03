export function openPopup(popup){
    popup.classList.add('popup_is-opened')
}

export function closePopup(evt, popup){
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
        popup.classList.remove('popup_is-opened')
    }
}

export function openImagePopup(){
    const imagePopupCont = document.querySelector('.popup_type_image')
    const cards = document.querySelectorAll('.places__item')
    const imagePopupContent = document.querySelector('.popup__image')
    const popupCaption = imagePopupCont.querySelector('.popup__caption')

    cards.forEach((item)=>{
    
        item.addEventListener('click', (evt) => {
            const src = evt.target.getAttribute('src')
            const alt = evt.target.getAttribute('alt')
            imagePopupContent.src = src;
            imagePopupContent.alt = alt;
            popupCaption.textContent = alt;
            openPopup(imagePopupCont)
        })
    })
}