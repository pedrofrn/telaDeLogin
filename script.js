const content = document.getElementById('content');

//content.appendChild(criaTitulo('Seja bem-vindo(a)!'))

function criaTitulo(texto) {
    const h1 = document.createElement('h1');
    h1.classList.add('titulo');
    h1.innerText = texto;
    return h1;
}

class Login {
    constructor() {

    }

    criaTitulo(texto) {
        const h1 = document.createElement('h1');
        h1.classList.add('titulo');
        h1.innerText = texto;
        return h1;
    }

    montaLogin() {

    }
}

const loginOi = new Login();

content.appendChild(loginOi.criaTitulo('oi'));