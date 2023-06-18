const botonInicio = document.getElementById('btn-inicio');
const imgLenguajes = document.getElementById('codes');
const imgApps = document.getElementById('apps');

const imagenesLenguajes = ["C","C++","C#", "HTML", "CSS", "JS0"];
const imagenesApps = ["C","C++","C#", "HTML", "CSS", "JS0"];

const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;
const tiempoDeEspera = 1000;
var opacidad = 1;
var animacionAcabada = false;

botonInicio.addEventListener('click', function() {
    window.location.href = '../index.html';
});

setTimeout(repro, 500); 

function repro()
{
    mostrarProgresivamente(imgLenguajes,imgApps);
}

function mostrarProgresivamente(elemento1, elemento2) {

    var ocultar = true;
    var timer = 0;

    var mostrarIntervalId = setInterval(function() {

        if(animacionAcabada)
        {
            timer += velocidadActualizacion;
            if (timer>=tiempoDeEspera)
            {
                if (opacidad>=1)
                {
                    ocultar = true;
                    animacionAcabada = false;
                }
                else if (opacidad <= 0)
                {
                    ocultar = false;
                    animacionAcabada = false;
                }
            }
        }
        else if (!ocultar)
        {
            if (opacidad < 1) {
                opacidad += cantidadAparicion; 
                elemento1.style.opacity = opacidad;
                elemento2.style.opacity = opacidad;
            } 
            else {
                animacionAcabada = true;
                timer = 0;
            }
        }
        else if (ocultar)
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