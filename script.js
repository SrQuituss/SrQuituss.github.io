document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function repro() {
    
    let i = 0;
    let barraInicioVisible = true;
    let parpadeoTimeoutId;
    añadirBarra();

    function escribir() {
        if (i < textoCompleto.length) {
            elementoTextoInicio.textContent += textoCompleto.charAt(i);
            i++;
            setTimeout(escribir, 100); 
        } 
        else {
            parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
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
        parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
    }

    escribir();
}

const textoCompleto = "Bienvenido/a a mi portfolio.";
const elementoTextoInicio = document.getElementById("txt-inicio");
const barraInicio = document.getElementById("barraInicio");
repro();