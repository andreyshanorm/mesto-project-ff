import { cardTemplate } from "../createCards"

export function deleteCard(item){
    item.remove();
}

export function likeCard(currentLikeBtn){
    currentLikeBtn.classList.toggle('is-active')
}

export function createCard(item, callBacks){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeBtn = cardElement.querySelector('.card__like-button')
    const deleteBtn = cardElement.querySelector('.card__delete-button')
    callBacks.openImagePopup(cardElement)
    deleteBtn.addEventListener('click', () => {callBacks.deleteCard(cardElement)})
    cardLikeBtn.addEventListener('click', () => {callBacks.likeCard(cardLikeBtn)})

    cardImage.src = `${item.link}`;
    cardImage.alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement

}