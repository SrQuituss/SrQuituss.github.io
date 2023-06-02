document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function escribirLetraPorLetra(texto, elemento) {
    
    let i = 0;
    let barraVisible = false;
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
            setTimeout(reiniciar, 5000); 
        }
    }

    function añadirBarra()
    {
        barra.style.display = 'inline';
        barraVisible = true;
    }

    function quitarBarra()
    {
        barra.style.display = 'none';
        barraVisible = false;
    }

    function parpadeoBarra()
    {
        if (barra) {
            quitarBarra();
        }
        else {
            añadirBarra();
        }
        parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
    }
  
    function reiniciar() {
        elemento.textContent = ""; 
        i = 0; 
        añadirBarra();
        clearTimeout(parpadeoTimeoutId);
        setTimeout(escribir, 200); 
    }

    escribir();
}

const textoCompleto = "Bienvenido/a a mi portfolio.";
const elementoTexto = document.getElementById("txt-inicio");
const barra = document.getElementById("barra");
escribirLetraPorLetra(textoCompleto, elementoTexto);