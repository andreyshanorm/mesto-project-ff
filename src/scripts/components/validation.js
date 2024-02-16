

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    addInputListners(form, config);
  });
}

/** Объявляю функцию слушателей всех инпутов */
const addInputListners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach(function (item) {
    item.addEventListener('input', () => {
      checkInputValidity(form, item, config.inputErrorClass, config.errorClass, config)
      toggleButtonState(form, inputList, config.submitButtonSelector, config.inactiveButtonClass)
    })
  });
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

function disableSubmitButton(isDisabled, buttonElement, buttonClass){
    if(isDisabled){
      buttonElement.disabled = true;
      buttonElement.classList.add(buttonClass)
    }else{
      buttonElement.disabled = false
      buttonElement.classList.remove(buttonClass)
    }
}

function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
}

function hideInputError(formElement, inputElement, config, IsSubmitBtnDisable) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const submitBtn = formElement.querySelector(config.submitButtonSelector)
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
  if(IsSubmitBtnDisable){
    disableSubmitButton(IsSubmitBtnDisable, submitBtn, config.inactiveButtonClass)
  }
}

function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass, config) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.customError);
  } else {
    inputElement.setCustomValidity('');
  }

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement, config, false);
  }
}

function toggleButtonState(form, inputList, submitButtonElementSelector, inactiveButtonClass) {
  const submitButtonElement = form.querySelector(submitButtonElementSelector)
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(true, submitButtonElement, inactiveButtonClass)
  } else {
    disableSubmitButton(false, submitButtonElement, inactiveButtonClass)
  }
}

export const clearValidation = (form, config) => {
    const inputs = form.querySelectorAll(config.inputSelector)
    if(inputs){
      inputs.forEach((item)=>{
        hideInputError(form, item, config, true)
    })
    }
    const errorMessages = form.querySelectorAll(config.errorContainer)
    if(errorMessages){
      errorMessages.forEach((item)=>{
        item.classList.remove(config.errorClass)
        item.textContent = ''
    })
    }
}
