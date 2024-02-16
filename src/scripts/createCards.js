import { openImagePopup } from "..";
import { deleteCard, createCard, likeCard } from "./components/card";


export const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

export const createCards = (cards, userId) => {
        cards.forEach((item)=>{
            cardContainer.append(createCard(item, {deleteCard, likeCard, openImagePopup}, userId))
        })
};

export default createCards;
