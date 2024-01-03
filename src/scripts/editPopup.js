const editPopup = () => {
    const editPopup = document.querySelector('.popup_type_edit')
    const openEditPopupBtn = document.querySelector('.profile__edit-button')
    const closeEditPopupBtn = document.querySelector('.popup__close')

    function openEditPopup(){
        editPopup.classList.add('popup_is-opened')
    }

    function closeEditPopup(){
        editPopup.classList.remove('popup_is-opened')
    }

    openEditPopupBtn.addEventListener('click', openEditPopup);
    closeEditPopupBtn.addEventListener('click', closeEditPopup)
}

export default editPopup

