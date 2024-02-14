import { getProfileInfo } from "./components/api"



export const renderProfile = (profile) => {
    const userName = document.querySelector('.profile__title')
    const userInfo = document.querySelector('.profile__description')
    const userAvatar = document.querySelector('.profile__image')
    userName.textContent = profile.name
    userInfo.textContent = profile.about
    userAvatar.src = profile.avatar

}