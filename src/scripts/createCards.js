import { openImagePopup } from "./components/modal";
import { deleteCard, createCard, likeCard } from "./components/card";


export const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

export const createCards = (cards) => {
        if(typeof(cards) !== 'object'){
            console.log('не объет');
            cardContainer.append(createCard(item, {deleteCard, likeCard, openImagePopup}))
        }


        cards.forEach((item)=>{
            cardContainer.append(createCard(item, {deleteCard, likeCard, openImagePopup}))
        })
};

export default createCards;
