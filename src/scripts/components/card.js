import { cardTemplate } from "../createCards"
import { openImagePopup } from "./modal";


export function deleteCard(item){
    item.remove();
}

export function likeCard(item){
    const currentlikeBtn = item.querySelector('.card__like-button')
    currentlikeBtn.classList.toggle('is-active')
}

export function createCard(item, deleteCardCallBack, likeCardCallBack, OpenModalCallBack){
    
    
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardLikeBtn = cardElement.querySelector('.card__like-button')
    const deleteBtn = cardElement.querySelector('.card__delete-button')
    OpenModalCallBack(cardElement)
    deleteBtn.addEventListener('click', () => {deleteCardCallBack(cardElement)})
    cardLikeBtn.addEventListener('click', () => {likeCardCallBack(cardElement)})

    cardElement.querySelector('.card__image').src = `${item.link}`;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement

}