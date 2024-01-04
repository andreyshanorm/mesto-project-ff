import { cardTemplate } from "../createCards"

export function deleteCard(item){
    item.remove();
}

export function createCard(item, deleteCardCallBack){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    const deleteBtn = cardElement.querySelector('.card__delete-button')

    deleteBtn.addEventListener('click', () => {deleteCardCallBack(cardElement)})

    cardElement.querySelector('.card__image').src = `${item.link}`;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    return cardElement

}