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
        changeAvatar(data.link, apiConfig).then((updatedData) => {
            setTimeout(() => {
                renderProfile(updatedData)
            }, 300)
        }).finally(()=>{
            renderLoading(false, form);
        })
        closePopup(form)
    })
    
}