import { openPopup } from "../modal";


const openAvatarPopup = (popup, openBtn) => {
    openBtn.addEventListener('click', () => {
        popup.querySelector('input').value = ''
        openPopup(popup)
    });

}

export default openAvatarPopup