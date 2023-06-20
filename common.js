var main = document.getElementById('main');

const velocidadActualizacion = 10;
const cantidadAparicion = 0.02;

function repro()
{
    var opacidad = 0;
    var mostrarIntervalId = setInterval(function() {
        if (opacidad < 1) {
            opacidad += cantidadAparicion; 
            main.style.opacity = opacidad;
        } 
        else {
            clearInterval(mostrarIntervalId);
        }
    },  velocidadActualizacion);
}

function changeWindow(window)
{
    var opacidad = 0;
    var ocultarIntervalId = setInterval(function() {
        if (opacidad > 0) {
            opacidad -= cantidadAparicion; 
            main.style.opacity = opacidad;
        } 
        else {
            clearInterval(mostrarIntervalId);
            window.location.href = window;
        }
    },  velocidadActualizacion);
}

repro();