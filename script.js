const elementoTextoInicio = document.getElementById("txt-inicio");
const elementoTextoQuienSoy = document.getElementById("txt-quienSoy");
const elementoTextoProyectos = document.getElementById("txt-proyectos");
const elementoTextoContacto = document.getElementById("txt-contacto");
const barraInicio = document.getElementById("barra-inicio");
const botonInicio = document.getElementById('btn-inicio');

//TEXTO-INICIO
const textoCompleto = "Bienvenido/a a mi portfolio.";
const velocidadEscritura = 100;
const velocidadParpadeoBarra = 500;

//BOTONES
const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;
const cantidadCambioColor = 0.05;
var cambiarQuienSoyIntervalId = null;
var cambiarProyectosIntervalId = null;
var cambiarContactosIntervalId = null;
var factorQuienSoy = 0;
var factorProyectos = 0;
var factorContacto = 0;
var defaultColor = "rgb(0,0,0)";
var changedColor = "rgb(255,255,255)";

botonInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});

elementoTextoQuienSoy.addEventListener('mouseenter', function(){
    cambiarColorProgresivamente(elementoTextoQuienSoy, false);
});
elementoTextoQuienSoy.addEventListener('mouseexit', function(){
    cambiarColorProgresivamente(elementoTextoQuienSoy, true);
});

function repro() {
    
    let i = 0;
    let barraInicioVisible = true;
    let parpadeoTimeoutId;
    añadirBarra();
    escribir();

    function escribir() {
        if (i < textoCompleto.length) {
            elementoTextoInicio.textContent += textoCompleto.charAt(i);
            i++;
            setTimeout(escribir, velocidadEscritura); 
        } 
        else {
            parpadeoTimeoutId = setTimeout(parpadeoBarra, velocidadParpadeoBarra);
            mostrarProgresivamente(elementoTextoQuienSoy);
            mostrarProgresivamente(elementoTextoProyectos);
            mostrarProgresivamente(elementoTextoContacto);
        }
    }

    function añadirBarra()
    {
        barraInicio.style.visibility = 'visible';
        barraInicioVisible = true;
    }

    function quitarBarra()
    {
        barraInicio.style.visibility = 'hidden';
        barraInicioVisible = false;
    }

    function parpadeoBarra()
    {
        if (barraInicioVisible) {
            quitarBarra();
        }
        else {
            añadirBarra();
        }
        parpadeoTimeoutId = setTimeout(parpadeoBarra, velocidadParpadeoBarra);
    }

    function mostrarProgresivamente(elemento) {
        var opacidad = 0;
        var mostrarIntervalId = setInterval(function() {
            if (opacidad < 1) {
                opacidad += cantidadAparicion; 
                elemento.style.opacity = opacidad;
            } 
            else {
                clearInterval(mostrarIntervalId);
            }
        },  velocidadActualizacion);
    }
}

function cambiarColorProgresivamente(elemento, def)
{
    if (elemento == elementoTextoQuienSoy)
    {
        cambiarQuienSoyIntervalId = setInterval(function() {
            if (def)
            { 
                if (factorQuienSoy>0)
                {
                    factorQuienSoy -= cantidadCambioColor;
                    elemento.style.color = lerpColor(white, black, factorQuienSoy);
                }
                else
                {
                    clearInterval(cambiarQuienSoyIntervalId)
                }
            }
            else
            {
                if (factorQuienSoy<1)
                {
                    factorQuienSoy += cantidadCambioColor;
                    elemento.style.color = lerpColor(white, black, factorQuienSoy);
                }
                else
                {
                    clearInterval(cambiarQuienSoyIntervalId)
                }
            }
        }, velocidadActualizacion);
    }
}

function lerpColor(color1, color2, factor) {
  
    var start = colorStart.match(/\d+/g).map(Number);
    var end = colorEnd.match(/\d+/g).map(Number);

    var r = Math.round(start[0] * (1 - t) + end[0] * t);
    var g = Math.round(start[1] * (1 - t) + end[1] * t);
    var b = Math.round(start[2] * (1 - t) + end[2] * t);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

repro();