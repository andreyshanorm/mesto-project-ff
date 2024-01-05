import { handleFormSubmit } from "./handleFormSumbit"
import { closePopup } from "../modal"
import { editPopupVar } from "../../constants"

const proileEditForm = (form) => {
    const editFormNameInput = form.querySelector('.popup__input_type_name')
    const editFormJobInput = form.querySelector('.popup__input_type_description')
    const nameContainer = document.querySelector('.profile__title')
    const jobContainer = document.querySelector('.profile__description')
    editFormNameInput.value = `${nameContainer.textContent}`
    editFormJobInput.value = `${jobContainer.textContent}`

    form.addEventListener('submit', (evt)=>{
        console.log(evt);
        handleFormSubmit(evt, editFormNameInput.value, editFormJobInput.value, nameContainer, jobContainer)
        closePopup(evt, editPopupVar)
    })

}

export default proileEditForm