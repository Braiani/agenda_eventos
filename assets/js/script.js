import palestrante from "../components/palestrantes.js";

async function getApiInformations() {
    const response = await fetch('../api/informacoes.json').then(response => response.json());
    console.log(response);
    return response;
}

async function getSpeakers() {
    const response = await getApiInformations();

    const speakers = response.speakers;

    const speakersContainer = document.getElementById('palestrantes');

    speakers.forEach(speaker => {
        speakersContainer.innerHTML += palestrante(speaker);
    });
}

getSpeakers();