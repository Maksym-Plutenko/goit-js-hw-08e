import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const formValues = {};

function onInput(event) {
    formValues.email = email.value;
    formValues.message = message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formValues));
}

const throttledOnInput = throttle(onInput, 500);

form.addEventListener('input', throttledOnInput);

const oldFormValues = JSON.parse(localStorage.getItem("feedback-form-state"));
if (oldFormValues) {
    email.value = oldFormValues.email;
    message.value = oldFormValues.message;
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    email.value = '';
    message.value = '';
    localStorage.removeItem("feedback-form-state");
}
