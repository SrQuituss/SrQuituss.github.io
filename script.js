const elementoTextoInicio = document.getElementById("txt-inicio");
const elementoTextoQuienSoy = document.getElementById("txt-quienSoy");
const elementoTextoProyectos = document.getElementById("txt-proyectos");
const elementoTextoContacto = document.getElementById("txt-contacto");
const barraInicio = document.getElementById("barra-inicio");
const botonInicio = document.getElementById('btn-inicio');

botonInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});


//TEXTO-INICIO
const textoCompleto = "Bienvenido/a a mi portfolio.";
const velocidadEscritura = 100;
const velocidadParpadeoBarra = 500;

//BOTONES
const velocidadActualizacion = 20;
const cantidadAparicion = 0.02;

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
        }, velocidadAparicion);
    }
}

repro();