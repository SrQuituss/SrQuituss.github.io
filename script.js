document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function escribirLetraPorLetra(texto, elemento) {
    
    let i = 0;
    let barraVisible = true;
    let parpadeoTimeoutId;
    añadirBarra();

    function escribir() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, 100); 
        } 
        else {
            parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
        }
    }

    function añadirBarra()
    {
        barra.style.visibility = 'visible';
        barraVisible = true;
    }

    function quitarBarra()
    {
        barra.style.visibility = 'hidden';
        barraVisible = false;
    }

    function parpadeoBarra()
    {
        if (barraVisible) {
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
const elementoTexto = document.getElementById("txt-inicio");
const barra = document.getElementById("barra");
escribirLetraPorLetra(textoCompleto, elementoTexto);