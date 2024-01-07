import './styles/index.css';
import createCards from './scripts/createCards';
import openEditPopup from './scripts/components/popup/openEditPopup';
import openNewCardPopup from './scripts/components/popup/openNewCardPopup';
import handleEditForm from './scripts/components/forms/handleEditForm';
import { handleCardForm } from './scripts/components/forms/handleCardForm';
import { closePopups } from './scripts/components/modal';
import * as constants from './scripts/constants'

createCards()
openEditPopup(constants.editPopupVar, constants.openEditPopupBtn)
openNewCardPopup(constants.newCardPopupVar, constants.openNewCardPopupBtn)
handleEditForm(constants.proileEditFormVar)
handleCardForm(constants.addCardFormVar)
closePopups(constants.popups)


