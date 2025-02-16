import fetchApi from "./fetchApi.js";
import { verifyLogin } from "./utils.js";

function logged() {
    if(!verifyLogin()) {
        window.location.href = './login.html';
    }
}

async function getTickets() {}


logged();
getTickets();