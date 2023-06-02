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
            parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
            setTimeout(reiniciar, 5000); 
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

    function invisibleBarra()
    {
        elemento.textContent += ' ';
        barra = false;
    }

    function parpadeoBarra()
    {
        quitarBarra();
        if (barra) {
            console.log("hola");
            invisibleBarra();
        }
        else {
            añadirBarra();
        }
        parpadeoTimeoutId = setTimeout(parpadeoBarra, 500);
    }
  
    function reiniciar() {
        elemento.textContent = ""; 
        barra = false;
        i = 0; 
        clearTimeout(parpadeoTimeoutId);
        setTimeout(escribir, 200); 
    }

    escribir();
}

const textoCompleto = "Bienvenido/a a mi portfolio.";
const elementoTexto = document.getElementById("txt-inicio");
escribirLetraPorLetra(textoCompleto, elementoTexto);