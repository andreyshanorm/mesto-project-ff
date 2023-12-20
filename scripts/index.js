
const cardContainer = document.querySelector('.places__list')

// @todo: Темплейт карточки
function createCard(item){
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = `${item.link}`
    cardElement.querySelector('.card__title').textContent = `${item.name}`
    return cardElement
}

function deleteCard(){
    const deleteBtn = document.querySelectorAll('.card__delete-button')
    deleteBtn.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentNode.remove()
        })
    })
}

function renderCards(){
    initialCards.forEach((item) => {
        const card = createCard(item)
        cardContainer.append(card)
    })
    deleteCard()
}

renderCards()


