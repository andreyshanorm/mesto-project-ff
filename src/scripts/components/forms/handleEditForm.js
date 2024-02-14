import { handleFormSubmit } from "./handleFormSubmit"
import { changeProfileInfo, apiConfig } from "../api"

const nameContainer = document.querySelector('.profile__title')
const jobContainer = document.querySelector('.profile__description')
const editFormNameInput = document.querySelector('.popup__input_type_name')
const editFormJobInput = document.querySelector('.popup__input_type_description')

export { nameContainer, jobContainer, editFormJobInput, editFormNameInput }


const handleEditForm = (form) => {
    form.addEventListener('submit', (evt)=>{
        const values = {
            name: editFormNameInput.value,
            job: editFormJobInput.value,
            nameContainer,
            jobContainer
        }
        changeProfileInfo(values.name, values.job, apiConfig)
        handleFormSubmit(evt, values)
    })
}

export default handleEditForm