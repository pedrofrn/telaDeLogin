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

    inputPreenchido() {
        const inputUsuario = document.querySelector('input#usuario');
        const inputPassword = document.querySelector('input#password');
        const msg = '<p class="erro">Preencha todos os campos.</p>';
        if (inputUsuario.value === '' || inputPassword.value === '') {
            return content.innerHTML += msg;
        }
    }
}