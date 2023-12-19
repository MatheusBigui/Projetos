const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');
var currentTime = new Date().getHours();
const fundo = document.getElementById('relogio');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let sec = dateToday.getSeconds();
    let min = dateToday.getMinutes();
    let hr = dateToday.getHours();

    if (sec < 10) {
        sec = "0" + sec
    }

    if (min < 10) {
        min = "0" + min
    }

    if (hr < 10) {
        hr = "0" + hr
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})


function setFundoCor() {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
        fundo.style.backgroundImage = "url('images/manha.jpg')";
    } else if (currentTime >= 12 && currentTime < 18) {
        fundo.style.backgroundImage = "url('images/tarde.jpg')";
    } else {
        fundo.style.backgroundImage = "url('images/noite.jpg')";
    }
}

setFundoCor();
relogio;

function adjustRelogioSize() {
    var relogio = document.getElementById('relogio');
} if (window.matchMedia("(max-width: 700px)").matches) {
    relogio.style.fontSize = '3em';
} else {
    relogio.style.fontSize = '5em';
}
window.addEventListener('resize', adjustRelogioSize);