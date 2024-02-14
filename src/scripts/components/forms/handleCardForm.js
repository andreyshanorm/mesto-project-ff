import { cardContainer } from '../../createCards'
import { deleteCard, createCard, likeCard } from '../card';
import { openImagePopup } from '../modal';
import { newCardPopupVar, addCardFormVar } from '../../constants';
import { closePopup } from "../modal"
import { addCard, apiConfig } from '../api';
import createCards from '../../createCards';

export function handleCardForm(form) {
    const addCardNameInput = form.querySelector('.popup__input_type_card-name')
    const addCardLinkInput = form.querySelector('.popup__input_type_url')
    addCardNameInput.value = ''
    form.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        const data = {
            name: addCardNameInput.value,
            link: addCardLinkInput.value
        }
        addCard(data.name, data.link, apiConfig)
        // const additonalCard = createCard(data, {deleteCard, likeCard, openImagePopup})
        // cardContainer.prepend(additonalCard)
        addCardFormVar.reset()
        closePopup(newCardPopupVar)
        
    })
}

export function clearInputs(form){
    const addCardNameInput = form.querySelector('.popup__input_type_card-name')
    const addCardLinkInput = form.querySelector('.popup__input_type_url')
    addCardNameInput.value = ''
    addCardLinkInput.value = ''
}

