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

    geraMensagem(msg) {
        const p = document.createElement('p');
        p.classList.add('aviso');
        p.innerText = msg;
        const aviso = content.appendChild(p);
        return setTimeout(() => content.removeChild(aviso), 3000);
    }

    valida() {
        const campos = {
            email: document.querySelector('input#email').value,
            senha: document.querySelector('input#pwdCadastro').value,
            senhaRepetir: document.querySelector('input#pwd2Cadastro').value
        }

        if (campos.email === '' || campos.senha === '' || campos.senhaRepetir === '') return this.geraMensagem('Preencha todos os campos.');

        if (campos.email.indexOf('@') === -1) return this.geraMensagem('Digite um email válido.');

        if (campos.senha.length < 5) return this.geraMensagem('A senha deve ter 5 caracteres no mínimo.');

        if (campos.senha !== campos.senhaRepetir) return this.geraMensagem('As senhas devem ser iguais.');

        localStorage.setItem('loginSavedInfo', `{"usuario": "${campos.email}", "senha": "${campos.senha}"}`);
        this.geraMensagem('Cadastro feito com sucesso!');
        return setTimeout(() => window.location.reload(), 2000);
    }

}