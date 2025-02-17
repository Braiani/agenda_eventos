import palestrante from "../components/palestrantes.js";
import fetchApi from "./fetchApi.js";
import { showLoginIcon } from "./utils.js";

async function getSpeakers() {
    const response = await fetchApi('../api/informacoes.json');

    const speakers = response.speakers;

    const speakersContainer = document.getElementById('palestrantes');

    speakers.forEach(speaker => {
        speakersContainer.innerHTML += palestrante(speaker);
    });
}

getSpeakers();
showLoginIcon();