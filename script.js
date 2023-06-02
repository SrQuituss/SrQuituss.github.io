document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function escribirLetraPorLetra(texto, elemento) {
    let i = 0;
  
    function escribir() {
        if (i < texto.length) {
            if (elemento.textContent.length>1){ 
                elemento.textContent = elemento.textContent.slice(0, -1);
            }
            elemento.textContent += texto.charAt(i) + '|';
            i++;
            setTimeout(escribir, 100); 
        } 
        else {
            setTimeout(reiniciar, 5000); 
        }
    }
  
    function reiniciar() {
        elemento.textContent = ""; 
        i = 0; 
        escribir(); 
    }
  
    escribir();
}

const textoCompleto = "Bienvenido/a a mi portfolio";
const elementoTexto = document.getElementById("txt-inicio");
escribirLetraPorLetra(textoCompleto, elementoTexto);