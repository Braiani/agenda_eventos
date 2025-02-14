const programacao = ({ topic, time, speaker, speaker_id, description, location }, speaker_photo) => {
    let locationAndProfile = '';

    if (speaker_photo != ''){
        locationAndProfile = `
            <p class="text-gray-600 my-6">${location}</p>
            <p class="text-gray-600">
                <a href="#speaker_${speaker_id}" class="flex items-center bg-gray-200 rounded-lg py-2">
                    <img class="w-12 h-12 rounded-full mx-10" src="${speaker_photo}" alt="Foto de ${speaker}">
                    <span class="underline">${speaker}</span>
                </a>
            </p>
        `;
    }

    return `
        <div class="p-2 w-full lg:mb-0 mb-6">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
                <!-- Conteúdo do card -->
                <div class="text-center mt-4">
                    <h3 class="text-lg font-semibold">${topic}</h3>
                    <p class="text-gray-700 my-2"><b>${time}</b> - ${description}</p>
                    ${locationAndProfile}
                </div>
            </div>
        </div>
    `;
}

export default programacao;