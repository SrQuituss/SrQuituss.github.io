document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function escribirLetraPorLetra(texto, elemento) {
    
    let i = 0;
    let barra = false;
    let parpadeoTimeoutId;

    function escribir() {
        if (i < texto.length) {
            if (elemento.textContent.length>1){ 
                quitarBarra();
            }
            elemento.textContent += texto.charAt(i);
            añadirBarra();
            i++;
            setTimeout(escribir, 100); 
        } 
        else {
            setTimeout(reiniciar, 5000); 
            parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
        }
    }

    function añadirBarra()
    {
        elemento.textContent += '|';
        barra = true;
    }

    function quitarBarra()
    {
        elemento.textContent = elemento.textContent.slice(0, -1);
        barra = false;
    }

    function parpadeoBarra()
    {
        elemento.textContent = elemento.textContent.slice(0, -1);
        if (barra) {
            elemento.textContent += ' ';
        }
        else {
            añadirBarra();
        }
        parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
    }
  
    function reiniciar() {
        elemento.textContent = ""; 
        i = 0; 
        clearTimeout(parpadeoTimeoutId);
        setTimeout(escribir, 200); 
    }

    escribir();
}

const textoCompleto = "Bienvenido/a a mi portfolio";
const elementoTexto = document.getElementById("txt-inicio");
escribirLetraPorLetra(textoCompleto, elementoTexto);