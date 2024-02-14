import { openPopup } from "../modal";
import { clearValidation, formValidationConfig } from "../validation";
import { changeAvatarVar } from "../../constants";


const openAvatarPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        popup.querySelector('input').value = ''
        openPopup(popup)
    });

}

export default openAvatarPopup