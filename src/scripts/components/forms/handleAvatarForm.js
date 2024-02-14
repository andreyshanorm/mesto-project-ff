import { changeAvatar, apiConfig} from "../api"
import { renderProfile } from "../../renderProfile"
import { closePopup } from "../modal"

export function handleAvatarForm(form) {
    const addAvatarLinkInput = form.querySelector('.popup__input_type_avatar')
    addAvatarLinkInput.value = ''
    form.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        const data = {
            link: addAvatarLinkInput.value
        }
        changeAvatar(data.link, apiConfig)
        setTimeout(renderProfile, 100);
        closePopup(form)
    })
    
}