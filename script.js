document.getElementById('btn-inicio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function escribirLetraPorLetra(texto, elemento) {
    let i = 0;
    const intervalo = setInterval(function() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        }
        else {
            clearInterval(intervalo);
        }
    }, 100);
} 

const textoCompleto = "Bienvenido/a a mi portfolio";
const elementoTexto = document.getElementById("txt-inicio");
escribirLetraPorLetra(textoCompleto, elementoTexto);