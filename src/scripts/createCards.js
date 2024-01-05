import { cardsArray } from "./cards";
import { openImagePopup } from "./components/modal"
import { deleteCard } from "./components/card";
import { createCard } from "./components/card";
import { likeCard } from "./components/card";


export const cardTemplate = document.querySelector('#card-template').content;
export const cardContainer = document.querySelector('.places__list')
const createCards = () => {

    function renderCards(){
        cardsArray.forEach((item) => {
            const card = createCard(item, deleteCard, likeCard, openImagePopup)
            cardContainer.append(card)
        })
    }

    renderCards()
}

export default createCards