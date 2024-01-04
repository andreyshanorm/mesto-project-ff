export function handleFormSubmit(evt, firstInput, secondInput, firstInputPlaceHolder, secondInputPlaceHolder){
    evt.preventDefault()
    firstInputPlaceHolder.textContent = firstInput
    secondInputPlaceHolder.textContent = secondInput
}