import fetchApi from "./fetchApi.js";
import { verifyLogin } from "./utils.js";

if(verifyLogin()) {
    window.location.href = './index.html';
}

async function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email == '' || password == '') {
        alert("Os campos de e-mail e senha não podem estar vazios!");
        return;
    }

    await fetchApi('../api/users.json')
        .then(response => {
            let user = false;

            response.users.forEach(responseUser => {
                if(responseUser.email === email && responseUser.password === password) {
                    user = responseUser;
                }
            });

            if(user) {
                sessionStorage.setItem('userLogged', JSON.stringify(user));
                window.location.href = './index.html';
            } else {
                alert('Usuário ou senha inválidos');
            }
        });
}

function getKeyPressed(event){
    if (event.key == 'Enter'){
        login();
    }
}

document.getElementById('login').addEventListener('click', login);
document.getElementById('username').addEventListener('keypress', getKeyPressed)
document.getElementById('password').addEventListener('keypress', getKeyPressed)