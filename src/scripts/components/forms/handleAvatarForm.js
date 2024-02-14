import { changeAvatar, apiConfig} from "../api"
import { renderProfile } from "../../renderProfile"
import { closePopup } from "../modal"
import { renderLoading } from "../modal"

export function handleAvatarForm(form) {
    const addAvatarLinkInput = form.querySelector('.popup__input_type_avatar')
    addAvatarLinkInput.value = ''
    form.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        renderLoading(true, form)
        const data = {
            link: addAvatarLinkInput.value
        }
        changeAvatar(data.link, apiConfig).finally(()=>{
            console.log('финал');
            renderLoading(false, form)
        })
        // setTimeout(renderProfile, 200);
        closePopup(form)
    })
    
}