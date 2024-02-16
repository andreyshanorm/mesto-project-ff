import { openPopup } from "../modal";

import * as editFormElements from '../forms/handleEditForm'


const openEditPopup = (popup, openBtn) => {
    
    openBtn.addEventListener('click', () => {
        openPopup(popup)
        editFormElements.editFormNameInput.value = editFormElements.nameContainer.textContent
        editFormElements.editFormJobInput.value = editFormElements.jobContainer.textContent
    });

    
}

export default openEditPopup






