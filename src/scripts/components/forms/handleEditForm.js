import { handleFormSubmit } from "./handleFormSubmit"
import { changeProfileInfo } from "../api"
import { renderLoading } from "../../.."


const nameContainer = document.querySelector('.profile__title')
const jobContainer = document.querySelector('.profile__description')
const editFormNameInput = document.querySelector('.popup__input_type_name')
const editFormJobInput = document.querySelector('.popup__input_type_description')

export { nameContainer, jobContainer, editFormJobInput, editFormNameInput }


const handleEditForm = (form) => {
    form.addEventListener('submit', (evt)=>{
        renderLoading(true, form)
        let values = {
            name: editFormNameInput.value, 
            job: editFormJobInput.value,
        }
        changeProfileInfo(values.name, values.job)
        .then((data) => {
            values = {
                name: data.name,
                job: data.about,
                nameContainer,
                jobContainer
            }
            handleFormSubmit(evt, values)
        })
        .catch((err) => {
            console.error(err);
        })    
        .finally(()=>{
                renderLoading(false, form)
        })
    })
}

export default handleEditForm