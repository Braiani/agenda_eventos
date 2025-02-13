const palestrante = ({ name, topic, time, photo }) => {
    return `
        <!-- Card -->
        <div class="p-2 w-full lg:mb-0 mb-6">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
                <!-- Foto -->
                <img class="w-24 h-24 rounded-full mx-auto" src="${photo}" alt="Foto de ${name}">

                <!-- Conteúdo do card -->
                <div class="text-center mt-4">
                    <h2 class="text-xl font-semibold text-gray-800">${name}</h2>
                    <p class="text-sm text-gray-500 mt-2">${topic}</p>
                    <p class="text-sm text-gray-400 mt-2">${time}</p>
                </div>
            </div>
        </div>
    `;
};

export default palestrante;