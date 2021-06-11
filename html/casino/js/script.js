document.getElementById("tragamonedas").onclick = () => { 
    const premioTotal = 2500;
    const casilla = 10;
    let aciertos = Math.floor(Math.random() * 10);

    function calcular(aciertos) {
        return premioTotal * (aciertos / casilla);
    }

    alert("Con " + aciertos + " aciertos el premio es: " + calcular(aciertos) + ". Felicitaciones!");
}

document.getElementById("loteria").onclick = () => {
    let numero = Math.floor(Math.random() * 3);
    let premio = 0;
    switch (numero) {
        case 1:
        case 2:
            premio = 10000;
            break;
        case 3:
            premio = 100000;
            break;
        default:
            premio = 1000;
    }
    alert("El premio para el numero " + numero + " es: " + premio + ". Felicitaciones!");
}

document.getElementById("ruleta").onclick = () => {
    const finalRuleta = 25;
    let numeroGanador = Math.ceil(Math.random() * finalRuleta);
    for (let i = 1; i <= finalRuleta; i++) {
        let mensaje = "El numero de iteracion actual es: " + i;
        if (numeroGanador === i) {
            mensaje = "El numero ganador  es: " + i;
        }
        console.log(mensaje);
    }
}

function validarNumero(numero, minimo, maximo) {
    while (!numero || isNaN(numero) || numero < minimo || numero > maximo) {
        numero = parseInt(window.prompt("Número inválido, reingrese [" + minimo + "-" + maximo + "]"));
    }
    return numero;
}