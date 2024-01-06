import { cardContainer } from '../../createCards'
import { deleteCard, createCard, likeCard } from '../card';
import { openImagePopup } from '../modal';
import { newCardPopupVar, addCardFormVar } from '../../constants';
import { closePopup } from "../popup/closePopup"


export function handleCardForm(form) {
    const addCardNameInput = form.querySelector('.popup__input_type_card-name')
    const addCardLinkInput = form.querySelector('.popup__input_type_url')
    
    form.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        const data = {
            name: addCardNameInput.value,
            link: addCardLinkInput.value
        }
        const additonalCard = createCard(data, {deleteCard, likeCard, openImagePopup})
        cardContainer.prepend(additonalCard)
        addCardFormVar.reset()
        closePopup(newCardPopupVar)
    })

    
}

