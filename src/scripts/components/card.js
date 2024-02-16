import { cardTemplate } from "../createCards"
import { deleteCardQuery, likeCardQuuery } from "./api";



export function deleteCard(itemId, ownerId, card, userId){
    if(ownerId === userId){
        deleteCardQuery(itemId).then(() => {
            card.remove()
        })
        .catch((err) => {
            console.error(err);
        })
    }
}

function updateLikes(personsIdArray, cardLikeBtn, likeNumber, userId){
    const ownerInArray = personsIdArray.includes(userId)
    likeNumber.textContent = personsIdArray.length
    if(ownerInArray){
        cardLikeBtn.classList.add('is-active')
    }else{
        cardLikeBtn.classList.remove('is-active')
    }
}


export function likeCard(card, likeButton, likeNumber, userId){
    const isLiked = likeButton.classList.contains('is-active')
    likeCardQuuery(card._id, isLiked)
        .then((data) => {
            const likesIdArray = data.likes.map((item) => {
                return item._id
            })
            updateLikes(likesIdArray, likeButton, likeNumber, userId)
        })
        .catch((err) => {
            console.error(err);
        })
}

export function createCard(item, callBacks, userId){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeBtn = cardElement.querySelector('.card__like-button')
    const deleteBtn = cardElement.querySelector('.card__delete-button')
    const likeNumber = cardElement.querySelector('.likes__number')
    callBacks.openImagePopup(cardElement)
    if (item.owner._id !== userId){
        deleteBtn.disabled = true
        deleteBtn.style.display = 'none'
    }else{
        deleteBtn.addEventListener('click', () => {callBacks.deleteCard(item._id, userId, cardElement, userId)})
    }

    const likedPersonsId = item.likes.map((item) => {
        return item._id
    })
    updateLikes(likedPersonsId, cardLikeBtn, likeNumber, userId)
    cardLikeBtn.addEventListener('click', () => {callBacks.likeCard(item, cardLikeBtn, likeNumber, userId)})
    
    likeNumber.textContent = item.likes.length
    cardImage.src = `${item.link}`;
    cardImage.alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement
}