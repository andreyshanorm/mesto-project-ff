import { cardTemplate } from "../createCards"
import { deleteCardQuery } from "./api";
import { likeCardQuuery } from "./api";

export function deleteCard(itemId, OwnerId){
    if(OwnerId === 'd8460b2ac8963f12a63f7957'){
        deleteCardQuery(itemId)
        setTimeout(() => location.reload(), 100)
    }
}

export function likeCard(cardId, likeButton, likesCount, currentLikeNumber){
    const isLiked = likeButton.classList.contains('is-active')
    likeCardQuuery(cardId, isLiked).then((likenumber) => {
        likesCount.textContent = likenumber;
        likeButton.classList.toggle('is-active')

    }
    )
}

export function createCard(item, callBacks, currentLikeNumber){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeBtn = cardElement.querySelector('.card__like-button')
    const deleteBtn = cardElement.querySelector('.card__delete-button')
    const likeCount = cardElement.querySelector('.likes__number')
    callBacks.openImagePopup(cardElement)
    if (item.owner._id !== 'd8460b2ac8963f12a63f7957'){
        deleteBtn.disabled = true
        deleteBtn.style.display = 'none'
    }

    deleteBtn.addEventListener('click', () => {callBacks.deleteCard(item._id, item.owner._id)})
    cardLikeBtn.addEventListener('click', () => {callBacks.likeCard(item._id, cardLikeBtn, likeCount, item.likes.length)})

    
    likeCount.textContent = item.likes.length
    cardImage.src = `${item.link}`;
    cardImage.alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement

}