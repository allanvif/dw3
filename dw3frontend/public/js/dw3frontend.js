// Arquivo: ./public/js/dw3frontend.js
function dw3IsLogged() {
    // Verifica se o Cookie IsLogged existe.
    const isLogged = document.cookie
    .split(';')
    .some((cookie) => cookie.trim().startsWith('IsLogged='));
    if (!isLogged) {
        window.location.href = '/login';
        return false;
    }
    return true;
}