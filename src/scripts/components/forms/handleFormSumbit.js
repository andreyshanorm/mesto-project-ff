import { editPopupVar } from "../../constants"
import { closePopup } from "../popup/closePopup"

export function handleFormSubmit(evt, values){
    evt.preventDefault()
    values.nameContainer.textContent = values.name;
    values.jobContainer.textContent = values.job;
    closePopup(editPopupVar)
}