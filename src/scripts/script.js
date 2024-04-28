const inputs = document.querySelectorAll('.input');

const loginbtn = document.querySelector('.login_button')

const focar = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-ativo');
} 

const desfocar = ({target}) => {
    if(target.value == ""){
        const span = target.previousElementSibling;
        span.classList.remove('span-ativo');
    }
} 

const ativarBotao = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 3) {
        loginbtn.removeAttribute('disabled');
    }
    else{
        loginbtn.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', focar)
);

inputs.forEach((input) => input.addEventListener('focusout', desfocar)
);

inputs.forEach((input) => input.addEventListener('input', ativarBotao)
);