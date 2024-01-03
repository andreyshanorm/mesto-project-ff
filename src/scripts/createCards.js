import { cardsArray } from "./cards";
import { openImagePopup } from "./components/modal"

const createCards = () => {
    const cardContainer = document.querySelector('.places__list')
    const cardTemplate = document.querySelector('#card-template').content;

    // @todo: Темплейт карточки
    function createCard(item, deleteCardCallBack){
        const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

        const deleteBtn = cardElement.querySelector('.card__delete-button')

        deleteBtn.addEventListener('click', () => {deleteCardCallBack(cardElement)})

        cardElement.querySelector('.card__image').src = `${item.link}`;
        cardElement.querySelector('.card__image').alt = item.name;
        cardElement.querySelector('.card__title').textContent = item.name;
        return cardElement

    }

    function deleteCard(item){
        item.remove();
    }

    function renderCards(){
        cardsArray.forEach((item) => {
            const card = createCard(item, deleteCard, openImagePopup)
            cardContainer.append(card)
        })
    }

    renderCards()
}

export default createCards