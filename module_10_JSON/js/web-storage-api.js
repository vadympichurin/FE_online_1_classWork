
const refs = {
    form: document.querySelector('.js-form'),
    textarea: document.querySelector('#userFeedback'),
};


getSavedMessage();

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextAreaInput);


function handleFormSubmit(event) {
    event.preventDefault();

    console.log('Отправляем данные на бекэнд!!!');
    localStorage.removeItem('feedbackMessage');
    event.currentTarget.reset();
}

function handleTextAreaInput (event) {
    const message = event.currentTarget.value;

    localStorage.setItem('feedbackMessage', message);
};

function getSavedMessage () {
    const savedMessage = localStorage.getItem('feedbackMessage');

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
};



