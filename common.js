var main = document.getElementById('main');

const velocidadUpdate = 10;
const appearingCuantity = 0.02;

function repro()
{
    main.style.opacity = 0;
    var opacidad = 0;
    var mostrarIntervalId = setInterval(function() {
        if (opacidad < 1) {
            opacidad += appearingCuantity; 
            main.style.opacity = opacidad;
        } 
        else {
            clearInterval(mostrarIntervalId);
        }
    },  velocidadUpdate);
}

function changeWindow(windowPath)
{
    main.style.opacity = 1;
    var opacidad = 1;
    var ocultarIntervalId = setInterval(function() {
        if (opacidad > 0) {
            opacidad -= appearingCuantity; 
            main.style.opacity = opacidad;
        } 
        else {
            clearInterval(ocultarIntervalId);
            window.location.href = windowPath;
            main.style.opacity = 1;
        }
    },  velocidadUpdate);
}

repro();