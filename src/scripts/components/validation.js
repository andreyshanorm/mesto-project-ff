export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showInputError = (formElement, inputElement, config, customErrorMessage ) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
  if (customErrorMessage) {
    errorElement.textContent = customErrorMessage;
  }
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  const customValidate = /^[a-zA-Zа-яА-ЯЁё\s-\,]*$/;
 
  if (customValidate.test(inputElement.value)) {
    if (inputElement.validity.valid) {
        
      hideInputError(formElement, inputElement, formValidationConfig);
    } else showInputError(formElement, inputElement, formValidationConfig);
  } else {
    toggleButton(formElement, formValidationConfig);
    showInputError(
      formElement,
      inputElement,
      formValidationConfig,
      inputElement.dataset.customError
    );
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButton(formElement, formValidationConfig);
    });
    toggleButton(formElement, formValidationConfig);
  });
};

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    formElement.addEventListener("input", () => {
      setEventListeners(formElement, config);
    });
  });
};


export const toggleButton = (form, config) => {
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const inputList = Array.from(form.querySelectorAll(config.inputSelector))
    function findUnValid (inputList) {
        return inputList.some((inputElem)=>{
            return inputElem.classList.contains(config.inputErrorClass)
        })
    } 
    if(findUnValid(inputList)){
        buttonSubmit.disabled = true;
        buttonSubmit.classList.add('popup__button_disabled')
    }else{
        buttonSubmit.disabled = false;
        buttonSubmit.classList.remove('popup__button_disabled')
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
