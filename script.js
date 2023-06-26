import Login from './login.js';
import Cadastro from './cadastro.js';

const content = document.getElementById('content');

const login = new Login();
const cadastro = new Cadastro();

content.innerHTML = login.inicia();
content.innerHTML += cadastro.inicia();

const loginDiv = document.querySelector('div#login');
const cadastroDiv = document.querySelector('div#cadastro');
cadastroDiv.style.display = 'none';

const botaoLogin = document.querySelector('button#login');
const linkCadastro = document.querySelector('a.linkCadastro');
const botaoCadastro = document.querySelector('button#cadastro');

botaoLogin.addEventListener('click', () => {
    login.inputPreenchido;
    // preciso ver como remover as mensagens de erro
});

linkCadastro.addEventListener('click', () => {
    loginDiv.style.display = 'none';
    cadastroDiv.style.display = 'flex';
});

botaoCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    cadastro.valida();
})

