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

    // Tablero 21x21
    const tablero=[
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,1,2,2,0,1,0,2,2,1,0,0,1,0,0,1],
        [1,0,2,2,0,2,2,0,0,0,2,0,0,0,2,2,0,2,2,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,1,2,2,0,2,2,2,0,2,2,1,0,1,0,0,1],
        [1,0,0,1,0,2,0,0,0,0,0,0,0,0,0,2,0,1,0,0,1],
        [1,0,2,2,0,0,0,1,2,2,0,2,2,1,0,0,0,2,2,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,1,0,2,2,0,2,0,3,3,3,0,2,0,2,2,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,1,0,1],
        [1,0,2,0,2,2,0,1,0,3,3,3,0,1,0,1,2,0,2,0,1],
        [1,0,0,0,0,2,0,1,0,0,0,0,0,1,0,2,0,0,0,0,1],
        [1,0,2,1,0,0,0,2,2,2,0,2,2,2,0,0,0,1,2,0,1],
        [1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1],
        [1,0,0,2,0,2,2,2,0,2,2,2,0,2,2,2,0,2,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,2,1,0,2,1,0,0,0,1,0,0,0,1,2,0,1,2,0,1],
        [1,0,0,2,0,0,2,2,2,0,2,0,2,2,2,0,0,2,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];
    
    function crearTablero(tablero) {
        const divTablero=document.getElementById("tablero");

        tablero.forEach((fila, y) => {
            fila.forEach((celda, x) => {
                const divCelda=document.createElement("div");
                divCelda.classList.add("celda");

                if(celda === 0) {
                    divCelda.classList.add("vacio");
                } else if(celda === 1 || celda === 2) {
                    divCelda.classList.add("muro");
                    if(celda === 2) {
                        divCelda.classList.add("muro2");
                    }
                } else if(celda === 3) {
                    divCelda.classList.add("spawn");
                }

                divTablero.appendChild(divCelda);
            });
        });
    }

    // Se define el turno al comenzar y se crea el tablero
    turnoJugador();
    crearTablero(tablero);
});