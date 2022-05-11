import { throttle } from 'throttle-debounce';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSRORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSRORAGE_KEY); 
const parsedData = JSON.parse(savedData) || {}; 


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(500, onFormInput));

onPageLoad();

function onPageLoad() {
    if (savedData) {
    input.value = parsedData.email;
    textarea.value = parsedData.message;
};
}


function onFormInput() {
    const userData = {
        email: input.value,
        message: textarea.value,
    };
localStorage.setItem(LOCALSRORAGE_KEY, JSON.stringify(userData));     
};

function onFormSubmit(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSRORAGE_KEY)));
    form.reset();
    localStorage.removeItem(LOCALSRORAGE_KEY);
};



