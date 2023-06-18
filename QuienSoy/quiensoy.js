const botonInicio = document.getElementById('btn-inicio');
const imgLenguajes = document.getElementById('codes');
const imgApps = document.getElementById('apps');

const imagenesLenguajes = ["C","C++","C#", "HTML", "CSS", "JS0"];
const imagenesApps = ["C","C++","C#", "HTML", "CSS", "JS0"];

const velocidadActualizacion = 10;
const cantidadAparicion = 0.02;
var opacidad = 0;
var animacionAcabada = false;

botonInicio.addEventListener('click', function() {
    window.location.href = '../index.html';
});

setTimeout(repro, 500); 

function repro()
{
    mostrarProgresivamente();
}

function mostrarProgresivamente(elemento1, elemento2) {

    var ocultar = false;

    var mostrarIntervalId = setInterval(function() {

        if(animacionAcabada)
        {
            if (opacidad>=1)
                ocultar = true;
            else if (opacidad <= 0)
                ocultar = false;
        }

        if (!ocultar)
        {
            if (opacidad < 1) {
                opacidad += cantidadAparicion; 
                elemento1.style.opacity = opacidad;
                elemento2.style.opacity = opacidad;
            } 
            else {
                animacionAcabada = true;
            }
        }
        if (ocultar)
        {
            if (opacidad > 0) {
                opacidad -= cantidadAparicion; 
                elemento1.style.opacity = opacidad;
                elemento2.style.opacity = opacidad;
            } 
            else {
                animacionAcabada = true;
            }
        }
    },  velocidadActualizacion);
}