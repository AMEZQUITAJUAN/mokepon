function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = '';
    if (jugada == 1) {
        resultado = 'Piedra';
    } else if (jugada == 2) {
        resultado = 'Papel';
    } else if (jugada == 3) {
        resultado = 'Tijera';
    } else {
        resultado = 'Mal Elegido';
    }
    return resultado;
}

let jugador = 0;
let pc = aleatorio(1, 3);
let triunfos = 0;
let perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
    jugador = parseInt(prompt('Elige: 1 Piedra, 2 Papel, 3 Tijera'));

    alert('pc elige:' + eleccion(pc));
    alert('Tu eliges:' + eleccion(jugador));
    //COMBATE
    if (pc == jugador) {
        alert('EMPATE');
    } else if (jugador == 1 && pc == 3) {
        alert('GANASTE');
        triunfos = triunfos +1
    } else if (jugador == 2 && pc == 1) {
        alert('GANASTE');
        triunfos = triunfos +1
    } else if (jugador == 3 && pc == 2) {
        alert('GANASTE');
        triunfos = triunfos +1
    } else {
        alert('PERDISTE');
        perdidas=perdidas+1
    }

    if (jugador == pc) {
        triunfos++;
    } else {
        perdidas++;
    }
}
alert('Ganaste ' + triunfos +' veces, Perdiste ' + perdidas+' veces')
