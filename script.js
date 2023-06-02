const elementoTextoInicio = document.getElementById("txt-inicio");
const elementoTextoQuienSoy = document.getElementById("txt-quienSoy");
const elementoTextoProyectos = document.getElementById("txt-proyectos");
const elementoTextoContacto = document.getElementById("txt-contacto");
const botonInicio = document.getElementById('btn-inicio');

//TEXTO-INICIO
const textoCompleto = "Bienvenido/a a mi portfolio.";
const velocidadEscritura = 100;

//BOTONES
const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;
const cantidadCambioColor = 0.05;
var defaultColorQuienSoy = true;
var defaultColorProyectos = true;
var defaultColorContacto = true;
var quienSoyInterval = null;
var proyectosInterval = null;
var contactoInterval = null;
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
elementoTextoQuienSoy.addEventListener('mouseleave', function(){
    defaultColorQuienSoy = true;
    cambiarColorProgresivamente(elementoTextoQuienSoy);
});

elementoTextoProyectos.addEventListener('mouseenter', function(){
    defaultColorProyectos = false;
    cambiarColorProgresivamente(elementoTextoProyectos);
});
elementoTextoProyectos.addEventListener('mouseleave', function(){
    defaultColorProyectos = true;
    cambiarColorProgresivamente(elementoTextoProyectos);
});

elementoTextoContacto.addEventListener('mouseenter', function(){
    defaultColorContacto = false;
    cambiarColorProgresivamente(elementoTextoContacto);
});
elementoTextoContacto.addEventListener('mouseleave', function(){
    defaultColorContacto = true;
    cambiarColorProgresivamente(elementoTextoContacto);
});

function repro() {
    
    let i = 0;
    añadirBarra();
    escribir();

    function escribir() {
        if (i < textoCompleto.length) {
            elementoTextoInicio.textContent = elementoTextoInicio.textContent.slice(0, -1);
            elementoTextoInicio.textContent += textoCompleto.charAt(i);
            elementoTextoInicio.textContent += "|";
            i++;
            setTimeout(escribir, velocidadEscritura); 
        } 
        else {
            elementoTextoInicio.textContent = elementoTextoInicio.textContent.slice(0, -1);
            mostrarProgresivamente(elementoTextoQuienSoy);
            mostrarProgresivamente(elementoTextoProyectos);
            mostrarProgresivamente(elementoTextoContacto);
        }
    }
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

function cambiarColorProgresivamente(elemento)
{
    if (elemento == elementoTextoQuienSoy)
    {   
        clearInterval(quienSoyInterval);
        quienSoyInterval = setInterval(function() {
            if (defaultColorQuienSoy)
            { 
                if (factorQuienSoy>0)
                {
                    factorQuienSoy -= cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorQuienSoy);
                }
                else
                {
                    clearInterval(quienSoyInterval);
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
                    clearInterval(quienSoyInterval);
                }
            }
        }, velocidadActualizacion);
    }
    else if (elemento == elementoTextoProyectos)
    {   
        clearInterval(proyectosInterval);
        proyectosInterval = setInterval(function() {
            if (defaultColorProyectos)
            { 
                if (factorProyectos>0)
                {
                    factorProyectos -= cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorProyectos);
                }
                else
                {
                    clearInterval(proyectosInterval);
                }
            }
            else
            {
                if (factorProyectos<1)
                {
                    factorProyectos += cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorProyectos);
                }
                else
                {
                    clearInterval(proyectosInterval);
                }
            }
        }, velocidadActualizacion);
    }
    else if (elemento == elementoTextoContacto)
    {   
        clearInterval(contactoInterval);
        contactoInterval = setInterval(function() {
            if (defaultColorContacto)
            { 
                if (factorContacto>0)
                {
                    factorContacto -= cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorContacto);
                }
                else
                {
                    clearInterval(contactoInterval);
                }
            }
            else
            {
                if (factorContacto<1)
                {
                    factorContacto += cantidadCambioColor;
                    elemento.style.color = lerpColor(defaultColor, changedColor, factorContacto);
                }
                else
                {
                    clearInterval(contactoInterval);
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