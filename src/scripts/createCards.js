import { cardsArray } from "./cards";
import { openImagePopup } from "./components/modal"
import { deleteCard } from "./components/card";
import { createCard } from "./components/card";

export const cardTemplate = document.querySelector('#card-template').content;

const createCards = () => {
    const cardContainer = document.querySelector('.places__list')

    function renderCards(){
        cardsArray.forEach((item) => {
            const card = createCard(item, deleteCard, openImagePopup)
            cardContainer.append(card)
        })
    }

    renderCards()
}

export default createCards