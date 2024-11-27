const body = document.body;
const btn = document.querySelector("#btn");
const btnClose = document.querySelector("#btn_close");
const modal = document.querySelector("#menu_modal");
btn.addEventListener("click", btnHandler);
btnClose.addEventListener("click", btnCloseHandler);
function btnHandler(e) {
    e.preventDefault();
    body.classList.add("lock"); // блокируем скролл веб-страницы
    modal.classList.add("registration_menu--open"); // открываем модальное окно
}
function btnCloseHandler(e) {
    e.preventDefault();
    body.classList.remove("lock"); // разблокируем скролл страницы
    modal.classList.remove("registration_menu--open"); // закрываем окно
}
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        body.classList.remove("lock");
        modal.classList.remove("registration_menu--open");
    }
});