import palestrante from "../components/palestrantes.js";
import programacao from "../components/programacao.js";

async function getApiInformations() {
    const response = await fetch('../api/informacoes.json').then(response => response.json());
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

async function getSchedules(){
    const apiResponse = await getApiInformations();

    const schedules = apiResponse.schedules;
    const speakers = apiResponse.speakers;

    const scheduleContainer = document.getElementById("programacao");

    schedules.forEach(schedule => {
        let photo = '';

        if(schedule.speaker_id != null){
            photo = speakers[schedule.speaker_id - 1].photo;
        }

        scheduleContainer.innerHTML += programacao(schedule, photo)
    });
}

getSpeakers();
getSchedules();


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let screenSize = window.screen.availHeight;
    if (window.scrollY > (screenSize - 50)) { // A partir de 100px de rolagem
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});