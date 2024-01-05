import { cardContainer } from '../../createCards'
import { deleteCard } from "../card";
import { createCard } from "../card";
import { likeCard } from '../card';
import { openImagePopup } from '../modal';

export const addCardFormVar = document.querySelector('form[name="new-place"]')

export function addCardForm() {
    const addCardNameInput = addCardFormVar.querySelector('.popup__input_type_card-name')
    const addCardLinkInput = addCardFormVar.querySelector('.popup__input_type_url')
    

    addCardFormVar.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        const data = {
            name: addCardNameInput.value,
            link: addCardLinkInput.value
        }
        const additonalCard = createCard(data, deleteCard, likeCard, openImagePopup)
        cardContainer.prepend(additonalCard)
    })

}

