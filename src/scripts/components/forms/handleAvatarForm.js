import { changeAvatar} from "../api"
import { renderProfile } from "../../renderProfile"
import { closePopup } from "../modal"
import { renderLoading } from "../../.."

export function handleAvatarForm(form) {
    const addAvatarLinkInput = form.querySelector('.popup__input_type_avatar')
    addAvatarLinkInput.value = ''
    form.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        renderLoading(true, form)
        const data = {
            link: addAvatarLinkInput.value
        }
        changeAvatar(data.link)
        .then((updatedData) => {
            console.log(updatedData);
            setTimeout(() => {
                renderProfile(updatedData)
            }, 200)
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(()=>{
            renderLoading(false, form);
        })
        closePopup(form)
    })
    
}