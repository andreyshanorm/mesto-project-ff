import { handleFormSubmit } from "./handleFormSumbit"


const proileEditForm = () => {
    const proileEditForm = document.querySelector('form[name="edit-profile"]')
    const editFormNameInput = proileEditForm.querySelector('.popup__input_type_name')
    const editFormJobInput = proileEditForm.querySelector('.popup__input_type_description')
    const nameContainer = document.querySelector('.profile__title')
    const jobContainer = document.querySelector('.profile__description')

    editFormNameInput.value = `${nameContainer.textContent}`
    editFormJobInput.value = `${jobContainer.textContent}`


    proileEditForm.addEventListener('submit', (evt)=>{
        handleFormSubmit(evt, editFormNameInput.value, editFormJobInput.value, nameContainer, jobContainer)
    })

    
}

export default proileEditForm