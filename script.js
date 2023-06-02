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
var defaultColorQuienSoy = true;
var defaultColorProyectos = true;
var defaultColorContacto = true;
var factorQuienSoy = 0;
var factorProyectos = 0;
var factorContacto = 0;
var defaultColor = "rgb(0,0,0)";
var changedColor = "rgb(255,255,255)";

botonInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});

elementoTextoQuienSoy.addEventListener('mouseenter', function(){
    defaultColorQuienSoy = false;
    cambiarColorProgresivamente(elementoTextoQuienSoy);
});
elementoTextoQuienSoy.addEventListener('mouseexit', function(){
    defaultColorQuienSoy = true;
    cambiarColorProgresivamente(elementoTextoQuienSoy);
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

function cambiarColorProgresivamente(elemento)
{
    if (elemento == elementoTextoQuienSoy)
    {   
        var IntervalId = setInterval(function() {
            if (defaultColorQuienSoy)
            { 
                if (factorQuienSoy>0)
                {
                    factorQuienSoy -= cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorQuienSoy);
                }
                else
                {
                    clearInterval(IntervalId);
                    cambiarQuienSoyIntervalId == null;
                }
            }
            else
            {
                if (factorQuienSoy<1)
                {
                    factorQuienSoy += cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorQuienSoy);
                }
                else
                {
                    clearInterval(IntervalId);
                    cambiarQuienSoyIntervalId == null;
                }
            }
        }, velocidadActualizacion);
    }
}

function lerpColor(color1, color2, factor) {
  
    var start = color1.match(/\d+/g).map(Number);
    var end = color2.match(/\d+/g).map(Number);

    var r = Math.round(start[0] * (1 - factor) + end[0] * factor);
    var g = Math.round(start[1] * (1 - factor) + end[1] * factor);
    var b = Math.round(start[2] * (1 - factor) + end[2] * factor);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

repro();