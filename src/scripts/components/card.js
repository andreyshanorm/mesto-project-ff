import { cardTemplate } from "../createCards"
import { deleteCardQuery } from "./api";
import { likeCardQuuery } from "./api";



export function deleteCard(itemId, OwnerId, card){
    if(OwnerId === 'd8460b2ac8963f12a63f7957'){
        deleteCardQuery(itemId).then(() => {
            card.remove()
        })
    }
}

function updateLikes(personIdArray, cardLikeBtn, likecount){
    const personInArray = personIdArray.includes('d8460b2ac8963f12a63f7957')
    likecount.textContent = personIdArray.length
    if(personInArray){
        cardLikeBtn.classList.add('is-active')
    }else{
        cardLikeBtn.classList.remove('is-active')
        likecount.textContent = personIdArray.length
    }
}


export function likeCard(card, likeButton, likeCount){
    const isLiked = likeButton.classList.contains('is-active')
    likeCardQuuery(card._id, isLiked)
        .then((data) => {
            const likesIdArray = data.likes.map((item) => {
                return item._id
            })
            updateLikes(likesIdArray, likeButton, likeCount)
        })
}

export function createCard(item, callBacks){
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

    const likePersonsId = item.likes.map((item) => {
        return item._id
    })
    updateLikes(likePersonsId, cardLikeBtn, likeCount)
    deleteBtn.addEventListener('click', () => {callBacks.deleteCard(item._id, item.owner._id, cardElement)})
    cardLikeBtn.addEventListener('click', () => {callBacks.likeCard(item, cardLikeBtn, likeCount)})
    
    likeCount.textContent = item.likes.length
    cardImage.src = `${item.link}`;
    cardImage.alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement

}