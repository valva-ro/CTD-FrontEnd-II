const PIEDRA = {
    nombre: "Piedra",
    leGanaA: "Tijera",
    src: "./img/piedra.png"
};
const PAPEL = {
    nombre: "Papel",
    leGanaA: "Piedra",
    src: "./img/papel.png"
};
const TIJERA = {
    nombre: "Tijera",
    leGanaA: "Papel",
    src: "./img/tijera.png"
};
const OPCIONES = [PIEDRA, PAPEL, TIJERA];

let juegosJugados = 0;
let juegosGanadosPorUsuario = 0;
let juegosPerdidosPorUsuario = 0;
let mensajeResultadoInicial = document.getElementById("strEleccionMaquina").innerText;
let opcionUsuario;
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");

document.getElementById("jugados").innerText = juegosJugados;
document.getElementById("ganados").innerText = juegosGanadosPorUsuario;
document.getElementById("empatados").innerText = juegosJugados - juegosGanadosPorUsuario - juegosPerdidosPorUsuario;
document.getElementById("perdidos").innerText = juegosPerdidosPorUsuario;

document.addEventListener('DOMContentLoaded', () => { 

    piedra.onclick = () => {
        piedra.classList.add("seleccionado");
        papel.classList.remove("seleccionado");
        tijera.classList.remove("seleccionado");
        opcionUsuario = PIEDRA;
    }

    papel.onclick = () => {
        piedra.classList.remove("seleccionado");
        papel.classList.add("seleccionado");
        tijera.classList.remove("seleccionado");
        opcionUsuario = PAPEL;
    }

    tijera.onclick = () => {
        piedra.classList.remove("seleccionado");
        papel.classList.remove("seleccionado");
        tijera.classList.add("seleccionado");
        opcionUsuario = TIJERA;
    }

    document.getElementById("jugar").onclick = () => {
        document.getElementById("eleccionMaquina").classList = "btn-opcion";
        document.getElementById("imgMaquina").src = "./img/esperando.png"
        if (opcionUsuario) {
            let opcionAleatoria = OPCIONES[generarNumeroAleatorio(0, 2)];
            mostrarResultado(calcularGanador, opcionAleatoria);
        }
    };

    document.getElementById("reiniciar").onclick = () => {
        juegosJugados = 0;
        juegosGanadosPorUsuario = 0;
        juegosPerdidosPorUsuario = 0;

        document.getElementById("strEleccionMaquina").innerText = mensajeResultadoInicial;
        document.getElementById("eleccionMaquina").classList = "btn-opcion estado-inicial";
        document.getElementById("imgMaquina").src = "./img/esperando.png"
        document.getElementById("jugados").innerText = juegosJugados;
        document.getElementById("ganados").innerText = juegosGanadosPorUsuario;
        document.getElementById("empatados").innerText = juegosJugados - juegosGanadosPorUsuario - juegosPerdidosPorUsuario;
        document.getElementById("perdidos").innerText = juegosPerdidosPorUsuario;
    };
});

function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * ((maximo + 1) - minimo)) + minimo;
}

function mostrarResultado(calcularGanador, opcionAleatoria) {

    let ganador = calcularGanador(opcionAleatoria);
    let mensaje = "Empate 😐 la máquina también eligió ";

    if (ganador === -1) {
        mensaje = "Perdiste 😔 la máquina eligió ";
    } else if (ganador === 1) {
        mensaje = "Ganaste 😄 la máquina eligió ";
    }
    mensaje += opcionAleatoria.nombre;

    document.getElementById("eleccionMaquina").classList.add(opcionAleatoria.nombre.toLowerCase());
    document.getElementById("strEleccionMaquina").innerText = mensaje;
    document.getElementById("imgMaquina").src = opcionAleatoria.src;

    document.getElementById("jugados").innerText = juegosJugados;
    document.getElementById("ganados").innerText = juegosGanadosPorUsuario;
    document.getElementById("empatados").innerText = juegosJugados - juegosGanadosPorUsuario - juegosPerdidosPorUsuario;
    document.getElementById("perdidos").innerText = juegosPerdidosPorUsuario;
}

function calcularGanador(opcionAleatoria) {
    let resultado = 0;

    if (opcionUsuario !== opcionAleatoria) {
        if (opcionUsuario.leGanaA === opcionAleatoria.nombre) {
            resultado = 1;
            juegosGanadosPorUsuario++;
        } else {
            resultado = -1;
            juegosPerdidosPorUsuario++;
        }
    }

    juegosJugados++;
    return resultado;
}

function jugarALMejorDe(cdadRondas) {
    // TODO
}