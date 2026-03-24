let contador = 0;

const elemento = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");

function cambiarColor() {
    if (contador >= 10) {
        elemento.style.color = "blue";
    } else {
        elemento.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", function() {
    contador++;
    elemento.textContent = contador;
    cambiarColor();
});

btnDecrementar.addEventListener("click", function() {
    contador--;
    elemento.textContent = contador;
    cambiarColor();
});