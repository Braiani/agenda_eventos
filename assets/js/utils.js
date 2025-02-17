const verifyLogin = () => {
    return sessionStorage.getItem('userLogged');
}

const getUserLogged = () => {
    return JSON.parse(sessionStorage.getItem('userLogged'));
}

const header = () => {
    return window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        let screenSize = window.screen.availHeight;
        if (window.scrollY > (screenSize - 50)) {
            header.classList.add('header-visible');
        } else {
            header.classList.remove('header-visible');
        }
    });
}

export { verifyLogin, getUserLogged, header };