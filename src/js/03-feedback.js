import { throttle } from 'throttle-debounce';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSRORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSRORAGE_KEY); //null
const parsedData = JSON.parse(savedData);

form.addEventListener('input', throttle(500, onFormInput));
form.addEventListener('submit', onFormSubmit);


if (parsedData) {
    input.value = parsedData.email;
    textarea.value = parsedData.message;
}

function onFormInput () {
    const userData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(LOCALSRORAGE_KEY, JSON.stringify(userData));
};

function onFormSubmit (e) {
    e.preventDefault();
    console.log(parsedData);
    form.reset();
    localStorage.removeItem(LOCALSRORAGE_KEY);
}



