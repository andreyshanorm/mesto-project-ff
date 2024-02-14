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


openEditPopup(constants.editPopupVar, constants.openEditPopupBtn)
openNewCardPopup(constants.newCardPopupVar, constants.openNewCardPopupBtn)
openAvatarPopup(constants.changeAvatarVar, constants.openAvatarPopupBtn)
handleEditForm(constants.proileEditFormVar)
handleCardForm(constants.addCardFormVar)
handleAvatarForm(constants.changeAvatarVar)
closePopups(constants.popups)
enableValidation(formValidationConfig)




