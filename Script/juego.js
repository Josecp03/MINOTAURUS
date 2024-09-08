window.addEventListener("DOMContentLoaded", function() {
    const textoTurno=document.querySelector(".turno");
    let turno=Math.round(Math.random()*1);

    /**
     *              TURNO
     *   0   Turno del jugador Rojo
     *   1   Turno del jugador Azul
     * 
     */
    function turnoJugador() {
        if(turno == 0) {
            textoTurno.textContent='TURNO DEL JUGADOR ROJO';
            textoTurno.style.color='rgb(255, 179, 179)';
        } else if(turno == 1) {
            textoTurno.textContent='TURNO DEL JUGADOR AZUL';
            textoTurno.style.color='rgb(179, 227, 255)';
        }
    }
    // Se define el turno al comenzar
    turnoJugador();
});