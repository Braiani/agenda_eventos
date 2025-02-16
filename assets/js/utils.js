const verifyLogin = () => {
    return sessionStorage.getItem('userLogged');
}

const getUserLogged = () => {
    return JSON.parse(sessionStorage.getItem('userLogged'));
}

export { verifyLogin, getUserLogged };