const div = document.querySelector('.container-cards');
const menu = document.querySelector('.navigation');
const iconMenu = document.querySelector('#menu-icon');
const iconMenuClose = document.querySelector('#menu-icon-close');

const form = document.querySelector('.form-register');
const buttonSubmit = document.querySelector('#button-form');
const mensageError = document.querySelector('.error-mensage');

function showMenu() {
    menu.style.display = 'flex';
    iconMenu.style.display = 'none';
    iconMenuClose.style.display = 'block';

}

function closeMenu() {
    menu.style.display = 'none';
    iconMenu.style.display = 'block';
    iconMenuClose.style.display = 'none';
}

function setSlide(n) {
    if(n === 1) {
        div.style.left = '0'
    }
    if(n === 2) {
        div.style.left = '-100%'
    }
    if(n === 3) {
        div.style.left = '-200%'
    }
    if(n === 4) {
        div.style.left = '-300%'
    }
}

buttonSubmit.addEventListener('click', (event) => {
    let input = document.querySelector('#email-form');
    let email = input.value;
    console.log(isValidEmail(email));
   if (isValidEmail(email)) {
        form.reset();
        mensageError.innerText = '';
        input.classList.remove('error');
    }else {
        mensageError.innerText = 'Please insert a valid email';
        input.classList.add('error');
    }


    event.preventDefault();
});

function isValidEmail(email) {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email);
}
