const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');
var currentTime = new Date().getHours();

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

