import { handleFormSubmit } from "./handleFormSubmit"
import { changeProfileInfo, apiConfig } from "../api"
import { renderLoading } from "../modal"


const nameContainer = document.querySelector('.profile__title')
const jobContainer = document.querySelector('.profile__description')
const editFormNameInput = document.querySelector('.popup__input_type_name')
const editFormJobInput = document.querySelector('.popup__input_type_description')

export { nameContainer, jobContainer, editFormJobInput, editFormNameInput }


const handleEditForm = (form) => {
    form.addEventListener('submit', (evt)=>{
        renderLoading(true, form)
        const values = {
            name: editFormNameInput.value,
            job: editFormJobInput.value,
            nameContainer,
            jobContainer
        }
        handleFormSubmit(evt, values)
        changeProfileInfo(values.name, values.job, apiConfig)
            .finally(()=>{
                renderLoading(false, form)
            })
    })
}

export default handleEditForm