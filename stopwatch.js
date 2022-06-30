'user strict';

var clock = { horas:0, minutos:0, segundos:0};
var temposegundos = 1000;
var stopwatch;
var controle = false;

function start() {
  if (controle == false) {
    stopwatch = setInterval(timer, temposegundos);
    controle = true;
  }
}

function pause() {
  clearInterval(stopwatch);
  controle = false;
}

function stop() {
  clearInterval(stopwatch);
  clock.horas = 0;
  clock.minutos = 0;
  clock.segundos = 0;
  controle = false;

  document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
  clock.segundos++;

  if (clock.segundos == 60) {
    clock.segundos = 0;
    clock.minutos++;

    if (clock.minutos == 60) {
      clock.minutos = 0;
      clock.horas++;
    }
  }

  var format =
    (clock.horas < 10 ? '0' + clock.horas : clock.horas) +
    ':' +
    (clock.minutos < 10 ? '0' + clock.minutos : clock.minutos) +
    ':' +
    (clock.segundos < 10 ? '0' + clock.segundos : clock.segundos);

  document.getElementById('counter').innerText = format;
}
