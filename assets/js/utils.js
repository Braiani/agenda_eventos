const verifyLogin = () => {
    return sessionStorage.getItem('userLogged');
}

const getUserLogged = () => {
    return JSON.parse(sessionStorage.getItem('userLogged'));
}

const removeUserLogged = () => {
    sessionStorage.removeItem('userLogged');
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

const showLoginIcon = () => {
    const loginLi = document.getElementById('login_logout');
    
    if (verifyLogin()){
        loginLi.innerHTML = `
            <a href="#" id="logout" class="text-blue-800">
                <i class="fa-solid fa-person-through-window"></i>
            </a>`;
        document.getElementById('logout').addEventListener('click', () => {
            removeUserLogged();
            window.location.href = './index.html';
        });
    }else{
        loginLi.innerHTML = `
            <a href="#" id="login" class="text-blue-800">
                <i class="fa-solid fa-user-ninja"></i>
            </a>`;
        
            document.getElementById('login').addEventListener('click', () => window.location.href = './login.html')
    }
}

export { verifyLogin, getUserLogged, header, removeUserLogged, showLoginIcon };