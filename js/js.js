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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropmenu2')) {

    var dropdowns = document.getElementsByClassName("select_city_hidden2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropmenu')) {
  
      var dropdowns = document.getElementsByClassName("select_city_hidden");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

var phoneInput = document.getElementById('phone');
var phoneMask = IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00'
});

function nextMsg(i) {
  if (messages.length == i) {
      i = 0;
  }
  $('#message').html(messages[i]).fadeIn(1500).delay(3000).fadeOut(500, function() {
      nextMsg(i + 1);
  });
};

var messages = [
  "понимают шутки",
  "с хорошим настроением",
  "разуваются в коридоре",
  "я хз чо придумать ахаха"
  ];

$('#message').hide();

nextMsg(0);