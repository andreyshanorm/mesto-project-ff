export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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
    item.addEventListener('input', (evt) => {
      checkInputValidity(form, item, config.inputErrorClass, config.errorClass)
      toggleButtonState(form, inputList, config.submitButtonSelector, config.inactiveButtonClass)
    })
  });
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
}

function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
}

function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
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
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

function toggleButtonState(form, inputList, submitButtonElementSelector, inactiveButtonClass) {
  const submitButtonElement = form.querySelector(`${submitButtonElementSelector}`)
  
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
}

export const clearValidation = (form, config) => {
    const inputs = form.querySelectorAll('input')
    if(inputs){
      inputs.forEach((item)=>{
        item.classList.remove(config.inputErrorClass)
    })
    }
    const errorMessages = form.querySelectorAll('span')
    if(errorMessages){
      errorMessages.forEach((item)=>{
        item.classList.remove(config.errorClass)
        item.textContent = ''
    })
    }
    const button = form.querySelector(config.submitButtonSelector)
    if(button){
      button.disabled = true;
      button.classList.add('popup__button_disabled')
    }
}
