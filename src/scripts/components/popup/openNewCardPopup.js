
import { openPopup } from "../modal";
import { clearInputs } from "../forms/handleCardForm";
import { addCardFormVar } from "../../constants";

const openNewCardPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        clearInputs(addCardFormVar)
        openPopup(popup)
    });

}

export default openNewCardPopup