import { openImagePopup } from "./components/modal";
import { deleteCard, createCard, likeCard } from "./components/card";
import { getCurrentLikeNumber } from "./components/api";

export const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

const createCards = (cards) => {
    cards.forEach((item)=>{
        cardContainer.insertAdjacentElement('afterbegin', createCard(item, {deleteCard, likeCard, openImagePopup}))
    })
    
};

export default createCards;
