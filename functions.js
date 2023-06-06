function escribir(elemento, textoCompleto, i = 0) {
    
    if (i < textoCompleto.length)
    {
        elemento.textContent = elemento.textContent.slice(0, -1);
        elemento.textContent += textoCompleto.charAt(i);
        if (i < textoCompleto.length - 1)
        {
            elemento.textContent += "|";
        }
        i++;
        setTimeout(escribir(elemento, textoCompleto, i), velocidadEscritura); 
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
    clearInterval(elemento.buttonInterval);
    elemento.buttonInterval = setInterval(function() {
        if (elemento.buttonTargetColor)
        { 
            if (elemento.buttonFactor>0)
            {
                elemento.buttonFactor -= cantidadCambioColor;
                elemento.elementoBoton.style.color = lerpColor(defaultColor, changedColor, elemento.buttonFactor);
            }
            else
            {
                clearInterval(elemento.buttonInterval);
            }
        }
        else
        {
            if (elemento.buttonFactor<1)
            {
                elemento.buttonFactor += cantidadCambioColor;
                elemento.elementoBoton.style.color = lerpColor(defaultColor, changedColor, elemento.buttonFactor);
            }
            else
            {
                clearInterval(elemento.buttonInterval);
            }
        }
    }, velocidadActualizacion);
}

function lerpColor(color1, color2, factor) {
  
    var start = color1.match(/\d+/g).map(Number);
    var end = color2.match(/\d+/g).map(Number);

    var r = Math.round(start[0] * (1 - factor) + end[0] * factor);
    var g = Math.round(start[1] * (1 - factor) + end[1] * factor);
    var b = Math.round(start[2] * (1 - factor) + end[2] * factor);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}