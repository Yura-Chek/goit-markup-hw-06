const open = document.querySelector('.modal-overlay')
const button_open = document.querySelector('.click')
const butto_close = document.querySelector('.modal-form-button')

button_open.addEventListener('click', () => {
    open.classList.add('is-open');
});

butto_close.addEventListener('click', () => {
    open.classList.remove('is-open')
});