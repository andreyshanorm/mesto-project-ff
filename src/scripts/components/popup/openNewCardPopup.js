import { openPopup } from "../modal";

const openNewCardPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        openPopup(popup)
    });

}

export default openNewCardPopup