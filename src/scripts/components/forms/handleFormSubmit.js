import { editPopupVar } from "../../constants"
import { closePopup } from "../modal"

export function handleFormSubmit(evt, values){
    evt.preventDefault()
    values.nameContainer.textContent = values.name;
    values.jobContainer.textContent = values.job;
    closePopup(editPopupVar)
}