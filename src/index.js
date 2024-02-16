import './styles/index.css';
import openEditPopup from './scripts/components/popup/openEditPopup';
import openNewCardPopup from './scripts/components/popup/openNewCardPopup';
import openAvatarPopup from './scripts/components/popup/openAvatarPopup';
import handleEditForm from './scripts/components/forms/handleEditForm';
import { handleCardForm } from './scripts/components/forms/handleCardForm';
import { openPopup, handlePopupClick } from './scripts/components/modal';
import { enableValidation } from './scripts/components/validation';
import { formValidationConfig } from './scripts/components/validationConfig';
import * as constants from './scripts/constants'
import { handleAvatarForm } from './scripts/components/forms/handleAvatarForm';
import { getProfileInfo, getCards} from './scripts/components/api';
import createCards from './scripts/createCards';
import { renderProfile } from './scripts/renderProfile';


openEditPopup(constants.editPopupVar, constants.openEditPopupBtn)
openNewCardPopup(constants.newCardPopupVar, constants.openNewCardPopupBtn)
openAvatarPopup(constants.changeAvatarVar, constants.openAvatarPopupBtn)
handleEditForm(constants.proileEditFormVar)
handleCardForm(constants.addCardFormVar)
handleAvatarForm(constants.changeAvatarVar)
closePopups(constants.popups)
enableValidation(formValidationConfig)


let userId
Promise.all([getProfileInfo(), getCards()])
    .then(([profile, cards]) => {
        userId = profile._id
        renderProfile(profile);
        createCards(cards, userId)
    })
    .catch((err) => {
        console.error(err);
    })

export function renderLoading (isLoading, form){
    const currentBtn = form.querySelector('.popup__button')
    currentBtn.textContent = isLoading ? 'Сохранение' : 'Сохранить'
}


const imagePopup = document.querySelector('.popup_type_image')
const imagePopupImg = imagePopup.querySelector('.popup__image')
const imagePopupCaption = imagePopup.querySelector('.popup__caption')
    

function handleCardClick(item){
    const src = item.querySelector('img').getAttribute('src')
    const alt = item.querySelector('img').getAttribute('alt')
    imagePopupImg.src = src;
    imagePopupImg.alt = alt;
    imagePopupCaption.textContent = alt;
    openPopup(imagePopup)
}

export function openImagePopup(item){
    const currentCardImage = item.querySelector('.card__image')
    currentCardImage.addEventListener('click', () => handleCardClick(item))
}

export function closePopups(popups){
    if(popups.length > 1){
        popups.forEach(handlePopupClick)
    }else{
        handlePopupClick(popups)
    } 
}