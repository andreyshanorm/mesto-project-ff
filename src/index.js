import './styles/index.css';
import createCards from './scripts/createCards';
import editPopup from './scripts/components/popup/editPopup';
import newCardPopup from './scripts/components/popup/newCardPopup';
import proileEditForm from './scripts/components/forms/proileEditForm';
import { addCardForm } from './scripts/components/forms/addCardForm';
import * as constants from './scripts/constants'



createCards()
editPopup(constants.editPopupVar, constants.openEditPopupBtn)
newCardPopup(constants.newCardPopupVar, constants.openNewCardPopupBtn)
proileEditForm(constants.proileEditFormVar)
addCardForm(constants.addCardFormVar)


