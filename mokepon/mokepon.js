const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanvidasJugador = document.getElementById('vida-jugador');
const spanvidasEnemigo = document.getElementById('vida-enemigo');
const sectionMensaje = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('atatques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let MascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones={}
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', 'https://static.platzi.com/media/user_upload/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.jpg', 5);
let capipepo = new Mokepon('Capipepo', 'https://static.platzi.com/media/user_upload/mokepons_mokepon_hipodoge_attack-4e83b55e-c381-4098-9a9d-40d86921d2a7.jpg', 5);
let ratigueya = new Mokepon('Ratigueya', 'https://static.platzi.com/media/user_upload/mokepons_mokepon_ratigueya_attack-b0c80a77-499a-49b6-a722-eab23f055cec.jpg', 5);

hipodoge.ataques.push(
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🍀', id: 'boton-tierra' }
);

capipepo.ataques.push(
    { nombre: '🍀', id: 'boton-tierra' },
    { nombre: '🍀', id: 'boton-tierra' },
    { nombre: '🍀', id: 'boton-tierra' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '🍀', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre}/>
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
    <p>${mokepon.nombre}</p>
    <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>`;
        contenedorTarjetas.innerHTML += opcionDeMokepones;
    });

    // Obtener los elementos input de las mascotas
    inputHipodoge = document.getElementById('hipodoge');
    inputCapipepo = document.getElementById('capipepo');
    inputRatigueya = document.getElementById('ratigueya');

    sectionReiniciar.style.display = 'none';

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}


function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'block';

    const mascotas = [inputHipodoge, inputCapipepo, inputRatigueya];
    mascotas.forEach(mascota => {
        if (mascota && mascota.checked) {
            spanMascotaJugador.innerHTML = mascota.id;
            MascotaJugador = mascota.id;
        }
    });

    if (!MascotaJugador) {
        alert('😡Debes seleccionar una mascota😡');
        return;
    }

    extraerAtaques(MascotaJugador);
    seleccionarMascotaEnemigo();
}


function extraerAtaques(mascotaNombre) {
    const mascotaSeleccionada = mokepones.find(mokepon => mokepon.nombre === mascotaNombre);
    if (mascotaSeleccionada) {
        mostrarAtaques(mascotaSeleccionada.ataques);
    }
}

function mostrarAtaques(ataques) {
    contenedorAtaques.innerHTML = ""; 
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`;
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

    botones = document.querySelectorAll('.BAtaque');
    secuenciaAtaque(); 
}


function secuenciaAtaque() {
    if (NodeList.prototype.isPrototypeOf(botones)) {
        botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {
                if (e.target.textContent === '🔥') {
                    ataqueJugador.push('FUEGO')
                    boton.style.background = '#112f58'
                } else if (e.target.textContent === '💦') {
                    ataqueJ.push('AGUA')
                    boton.style.background = '#112f58'
                } else {
                    ataqueJ.push('TIERRA')
                    boton.style.background = '#112f58'
                }
            })
        })
    }
    ataqueAleatorioEnemigo()
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
ataquesMokeponEnemigo=mokepones[mascotaAleatorio].ataques
 secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1);
    if (ataqueAleatorio === 0||ataqueAleatorio==1) {
        ataqueEnemigo.push('🔥FUEGO');
    } else if (ataqueAleatorio === 3||ataqueAleatorio==4) {
        ataqueEnemigo.push('💦AGUA');
    } else {
        ataqueEnemigo.push('🍀TIERRA');
    }
    iniciarPelea()
}
function iniciarPelea(){
    if(ataqueJugador.length===5){
        combate()
    }
}
function indexAmbossOponentes(jugador,enemigo){
indexAtaqueJugador = ataqueEnemigo[jugador]
indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}

function combate() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i]=== ataqueEnemigo[i]){
            indexAmbossOponentes(i,i)
            creatMensaje('EMPATASTE😒');   
        };
    }

    if (ataqueJugador === '🔥FUEGO' && ataqueEnemigo === '🍀TIERRA') {
        creatMensaje('GANASTE🎉');
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador === '💦AGUA' && ataqueEnemigo === '🔥FUEGO') {
        creatMensaje('GANASTE🎉');
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador === '🍀TIERRA' && ataqueEnemigo === '💦AGUA') {
        creatMensaje('GANASTE🎉');
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        creatMensaje('PERDISTE😥');
        vidasJugador--;
        spanvidasJugador.innerHTML = vidasJugador;
    }
    revisatvidas();
}

function revisatvidas() {
    if (vidasEnemigo === 0) {
        creatMensajeFinal('🎉🎉🎉FELICITACIONES GANASTE!!!🎉🎉🎉');
    } else if (vidasJugador === 0) {
        creatMensajeFinal('😥😥😥Lo siento PERDISTE😥😥😥');
    }
}

function creatMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.textContent = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.textContent = indexAtaqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function creatMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal;
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
