const elementoTextoInicio = document.getElementById("txt-inicio");
const elementoTextoQuienSoy = document.getElementById("txt-quienSoy");
const elementoTextoProyectos = document.getElementById("txt-proyectos");
const elementoTextoContacto = document.getElementById("txt-contacto");
const botonInicio = document.getElementById('btn-inicio');

function claseBoton(elemento,buttonTargetColor, buttonInterval, buttonFactor)
{
    this.elementoBoton = elemento;
    this.buttonTargetColor = buttonTargetColor;
    this.buttonInterval = buttonInterval;
    this.buttonFactor = buttonFactor;
}

//TEXTO-INICIO
const textoCompleto = "Bienvenido/a a mi portfolio.";
const velocidadEscritura = 100;

//BOTONES
const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;
const cantidadCambioColor = 0.05;
var botonQuienSoy = new claseBoton(elementoTextoQuienSoy, true, null, 0);
var botonProyectos = new claseBoton(elementoTextoProyectos, true, null, 0);
var botonContacto = new claseBoton(elementoTextoContacto, true, null, 0);
var defaultColor = "rgb(0,0,0)";
var changedColor = "rgb(255,255,255)";

botonInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});

function repro() {
    
    escribir(elementoTextoInicio);
    mostrarProgresivamente(elementoTextoQuienSoy);
    mostrarProgresivamente(elementoTextoProyectos);
    mostrarProgresivamente(elementoTextoContacto);
    habilitarBotones();
}

function habilitarBotones()
{
    botonQuienSoy.elementoBoton.style.cursor = "pointer";
    botonProyectos.elementoBoton.style.cursor = "pointer";
    botonContacto.elementoBoton.style.cursor = "pointer";

    botonQuienSoy.elementoBoton.addEventListener('mouseenter', function(){
        botonQuienSoy.buttonTargetColor = false;
        cambiarColorProgresivamente(botonQuienSoy);
    });
    botonQuienSoy.elementoBoton.addEventListener('mouseleave', function(){
        botonQuienSoy.buttonTargetColor = true;
        cambiarColorProgresivamente(botonQuienSoy);
    });
    
    botonProyectos.elementoBoton.addEventListener('mouseenter', function(){
        botonProyectos.buttonTargetColor = false;
        cambiarColorProgresivamente(botonProyectos);
    });
    botonProyectos.elementoBoton.addEventListener('mouseleave', function(){
        botonProyectos.buttonTargetColor = true;
        cambiarColorProgresivamente(botonProyectos);
    });
    botonProyectos.elementoBoton.addEventListener('click', function(){
        window.location.href = 'proyectos.html';
    });
    
    botonContacto.elementoBoton.addEventListener('mouseenter', function(){
        botonContacto.buttonTargetColor = false;
        cambiarColorProgresivamente(botonContacto);
    });
    botonContacto.elementoBoton.addEventListener('mouseleave', function(){
        botonContacto.buttonTargetColor = true;
        cambiarColorProgresivamente(botonContacto);
    });
}

setTimeout(repro, 500); 