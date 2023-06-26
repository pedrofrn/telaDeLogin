export default class Cadastro {
    constructor() {
        this.html = '';
    }

    inicia() {
        this.html = '<div id="cadastro">'
        this.html += this.titulo();
        this.html += this.inputEmail();
        this.html += this.inputSenha();
        this.html += this.inputSenhaRepetir();
        this.html += this.submitCadastro();
        return this.html += '</div>';
    }

    titulo() {
        return `<h1 class='titulo'>Faça seu cadastro</h1>`;
    }

    inputEmail() {
        return `<input type='text' id='email' placeholder='Digite seu email' />`;
    }

    inputSenha() {
        return `<input type='password' id='pwdCadastro' placeholder='Digite uma senha' />`;
    }

    inputSenhaRepetir() {
        return `<input type='password' id='pwd2Cadastro' placeholder='Repita a senha' />`;
    }

    submitCadastro() {
        return `<button type='button' id='cadastro'>Criar cadastro</button>`;
    }

    valida() {
        const campos = {
            email: document.querySelector('input#email').value,
            senha: document.querySelector('input#pwdCadastro').value,
            senhaRepetir: document.querySelector('input#pwd2Cadastro').value
        }
       
        if (campos.email === '' || campos.senha === '' || campos.senhaRepetir === '') return content.innerHTML += '<p class="erro">Preencha todos os campos.</p>';

        if (campos.email.indexOf('@') === -1)  return content.innerHTML += '<p class="erro">Digite um email válido.</p>';

        if (campos.senha !== campos.senhaRepetir) return content.innerHTML += '<p class="erro">As senhas devem ser iguais.</p>';

        localStorage.setItem('loginSavedInfo', `{"usuario": "${campos.email}", "senha": "${campos.senha}"}`);
    }

}