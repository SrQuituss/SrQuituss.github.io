const botonInicio = document.getElementById('btn-inicio');
var imgLenguajes = document.getElementById('codes');
var imgApps = document.getElementById('apps');

const imagenesLenguajes = ["C.png","C++.png","CSharp.png", "HTML.png", "CSS.png", "JS.png"];
const imagenesApps = ["Word.png","PowerPoint.png","Excel.png", "Unity.png", "3dsMax.png"];

const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;
var tiempoDeEspera = 500;
var opacidad = 1;
var animacionAcabada = false;

var indexLenguajes = 0;
var indexApps = 0;

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
                }
                else if (opacidad <= 0)
                {
                    ocultar = false;
                }
                animacionAcabada = false;
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
                tiempoDeEspera = 2000;
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
                CambiarFoto();
                tiempoDeEspera = 500;
                timer = 0;
            }
        }
    },  velocidadActualizacion);
}

function CambiarFoto()
{
    indexApps++;
    indexLenguajes++;
    if (indexApps==imagenesApps.length)
        indexApps=0;
    if (indexLenguajes==imagenesLenguajes.length)
        indexLenguajes=0;

    imgApps.src = imagenesApps[indexApps];
    imgLenguajes.src = imagenesLenguajes[indexLenguajes];
}