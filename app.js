let numeroSecreto = 0;;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteo = [];


function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
	if (numeroUsuario === numeroSecreto) {
		asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if (numeroUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'El número secreto es menor');
		} else {
			asignarTextoElemento('p', 'El número secreto es mayor');
		}
		intentos++;
		limpiarCaja();
	}
}

function condicionesIniciales() {
	numeroSecreto = generarNumeroSecreto();
	intentos = 1;

	asignarTextoElemento('h1', 'Juego de número secreto');
	asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
}

function reiniciarJuego() {
	limpiarCaja();
	condicionesIniciales();
	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


function limpiarCaja() {
	document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
	let numeroGenerado Math.floor(Math.random() * numeroMaximo) + 1;
	if (listaNumerosSorteo.length == numeroMaximo) {
		asignarTextoElemento('p', 'Ya se sortearón todos los números');
	} else {
		if (listaNumerosSorteo.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		} else {
			listaNumerosSorteo.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}

condicionesIniciales();