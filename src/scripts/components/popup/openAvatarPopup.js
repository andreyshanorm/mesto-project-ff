import { openPopup } from "../modal";
import { clearValidation, formValidationConfig } from "../validation";
import { changeAvatarVar } from "../../constants";

const openAvatarPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        clearValidation(changeAvatarVar, formValidationConfig)
        openPopup(popup)
    });

}

export default openAvatarPopup