const playGame = document.querySelector(".play-game");
let sonidoPlay = new Audio("../Audio/lego-breaking.mp3"); 

// Función de los botones
function reproducirSonido(sonido) {
    sonido.play();
}

playGame.addEventListener("click", function () {
    reproducirSonido(sonidoPlay);
    playGame.classList.add("desaparecer-boton");
}) 