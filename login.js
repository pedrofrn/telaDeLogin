const loginSavedInfo = localStorage.getItem('loginSavedInfo') ? JSON.parse(localStorage.getItem('loginSavedInfo')) : '';

export default class Login {
    constructor() {
        this.html = ''
    }

    inicia() {
        this.html = '<div id="login">'
        this.html += this.titulo();
        this.html += this.inputUsuario();
        this.html += this.inputPassword();
        this.html += this.submitLogin();
        this.html += this.linkCadastro();
        return this.html += '</div>';
    }

    titulo() {
        return `<h1 class='titulo'>Efetue o login</h1>`;
    }

    inputUsuario() {
        return `<input type='text' id='usuario' value='${loginSavedInfo ? loginSavedInfo.usuario : ''}' placeholder='Email de usuário' />`;
    }

    inputPassword() {
        return `<input type='password' id='password' value='${loginSavedInfo ? loginSavedInfo.senha : ''}' placeholder='Senha' />`;
    }

    submitLogin() {
        return `<button type='button' id='login'>Entrar</button>`;
    }

    linkCadastro() {
        return `<a href='#' class='linkCadastro'>Faça aqui seu cadastro.</a>`
    }

    geraMensagem(msg) {
        const p = document.createElement('p');
        p.classList.add('aviso');
        p.innerText = msg;
        const aviso = content.appendChild(p);
        return setTimeout(() => content.removeChild(aviso), 3000);
    }

    inputPreenchido() {
        const inputUsuario = document.querySelector('input#usuario').value;
        const inputPassword = document.querySelector('input#password').value;
        if (inputUsuario === '' || inputPassword === '') return this.geraMensagem('Preencha todos os campos.');
        if (loginSavedInfo !== '') {
            if (inputUsuario === loginSavedInfo.usuario && inputPassword === loginSavedInfo.senha) content.innerHTML = `<div id="sucesso">Login bem-sucedido para o usuário <strong>${inputUsuario}</strong>.</div>`;
            else return this.geraMensagem('Usuário ou senha inválidos');
        }
        else this.geraMensagem('Usuário não cadastrado');
    }
}