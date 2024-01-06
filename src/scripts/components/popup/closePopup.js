
export function closePopup(popup){
    setTimeout(()=>{popup.classList.remove('popup_is-animated')}, 800)
    popup.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', handleEscape)
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

export function handleEscape(evt){
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened') 
            closePopup(openedPopup)
      }
}

export function closePopups(popups){
    if(popups.length > 1){
        popups.forEach((popup) => {
            handlePopupClick(popup)
        })
    }else{
        handlePopupClick(popups)
    } 
}







