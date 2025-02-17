import { verifyLogin, getUserLogged, removeUserLogged, showLoginIcon } from "./utils.js";
import ingressosTable from "../components/ingressos.js"

function logged() {
    if(!verifyLogin()) {
        window.location.href = './login.html';
    }
}

function getTickets() {
    const tickets = getUserLogged().tickets;
    document.getElementById('ingressos').innerHTML = ingressosTable(tickets);
}

function logout() {
    removeUserLogged();
    window.location.href = './index.html';
}

logged();
getTickets();
showLoginIcon();