import './styles/index.css';
import openEditPopup from './scripts/components/popup/openEditPopup';
import openNewCardPopup from './scripts/components/popup/openNewCardPopup';
import openAvatarPopup from './scripts/components/popup/openAvatarPopup';
import handleEditForm from './scripts/components/forms/handleEditForm';
import { handleCardForm } from './scripts/components/forms/handleCardForm';
import { closePopups } from './scripts/components/modal';
import { enableValidation, formValidationConfig} from './scripts/components/validation';
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

Promise.all([getProfileInfo(), getCards()])
    .then((data) => {
        const profile = {
            _id: data[0]._id,
            name: data[0].name,
            about: data[0].about,
            avatar: data[0].avatar
        }

        const cards = data[1].map((item)=>{
            return {
                _id: item._id,
                name: item.name,
                link: item.link,
                likes: item.likes,
                owner: item.owner
            }
        })
        renderProfile(profile);
        createCards(cards, profile)
    })


