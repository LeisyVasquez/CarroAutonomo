let cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
let avisos = document.getElementById("avisos");
class Carro {

    //Se define un costructor para que cree nuevos objetos
    constructor(cambio, clutch, freno, frenoEmergencia) {
        this.cambio = cambio;
        this.clutch = clutch;
        this.freno = freno;
        this.frenoEmergencia = frenoEmergencia;
        this.carroArrancado = false;
        this.cont_frenos = 0;
        this.tiempoRecorrido = 0;
        this.velocidadPromedio = 0;
        this.nombreDestino = "";
        this.carroEncendido = false;
        this.destinoSeleccionado = false;
        this.distanciaRecorrida = 0;
    }

    //Metodo para el encendido del carro
    encenderCarro() {
        let cambio = document.getElementById("cambio");
        let velocimetro = document.getElementById("velocimetro");
        cambio.innerHTML = this.cambio;
        velocimetro.innerHTML = "";

        let pantalla = document.getElementById("pantalla");
        setTimeout(() => { pantalla.innerHTML = "Botón encendido presionado, verificando condiciones del automóvil para ser encendido", 1000; });

        //Verificando cambio en neutro
        setTimeout(() => { pantalla.innerHTML = "<strong>Verificando estado del cambio de velocidad</strong>"; }, 2000);
        setTimeout(() => { pantalla.innerHTML = `Cambio en ${this.cambio}`; }, 3000);
        if (this.cambio == "neutro") {
            setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 4000);
        } else {
            setTimeout(() => { pantalla.innerHTML = `Corrigiendo cambio de velocidad a estado neutro`; }, 4000);
            setTimeout(() => { cambio.innerHTML = this.cambio }, 4000);
            setTimeout(() => { pantalla.innerHTML = "¡Todo correcto!"; }, 4500);
            this.cambio = "neutro"
        };

        //Verificando freno de emergencia activado
        setTimeout(() => { pantalla.innerHTML = "<strong>Revisando freno de emergencia</strong>"; }, 5000);
        setTimeout(() => { pantalla.innerHTML = `Freno de emergencia ${this.frenoEmergencia}`; }, 6000);
        if (this.frenoEmergencia == "activado") {
            setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 7000);
        } else {
            setTimeout(() => { pantalla.innerHTML = "Activando freno de emergencia"; }, 7000);
            setTimeout(() => { pantalla.innerHTML = "¡Todo correcto!"; }, 7500);
            this.frenoEmergencia = "activado";
        }

        setTimeout(() => {
            pantalla.innerHTML = "<strong><br>El carro esta encendido</strong> ";
            this.carroEncendido = true;
        }, 8000);

    }

    //Metodo para seleccionar el destino aleatoriamente. 
    seleccionarDestino() {
        if (this.carroEncendido == true) {
            let numeroParadas = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            this.distanciaRecorrida = Math.floor(Math.random() * 500);
            let tiempoParada = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            let intervaloParada = Math.floor(this.distanciaRecorrida / numeroParadas);
            this.nombreDestino = prompt("¿Cuál es el nombre de tú destino?");
            console.log(this.nombreDestino)
            this.destinoSeleccionado = true;

            setTimeout(() => {
                //nombreDestino.innerHTML = "Destino: " + this.nombreDestino;
                //nombreDestino.innerHTML += "<br> Dstancia a recorrer: " + this.distanciaRecorrida;

            }, 2000);
        } else {
            cajaAvisos = document.getElementById("cajaAvisos").style.display = "block";
            avisos.innerHTML = "No puede selecionar destino, el carro <strong>no está encendido</strong>";
            setTimeout(() => {
                cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
                avisos.innerHTML = "";
            }, 3000);

        }
    }

    //Metodo para arancar el carro.
    arrancarCarro() {
        let cambio = document.getElementById("cambio");
        let velocimetro = document.getElementById("velocimetro");
        cambio.innerHTML = this.cambio;
        velocimetro.innerHTML = "";

        let pantalla = document.getElementById("pantalla");
        if (this.carroEncendido == true && this.destinoSeleccionado == true) {
            setTimeout(() => { pantalla.innerHTML = "Iniciado el arranque del carro", 1000; });

            //Verificando clutch presionado
            setTimeout(() => { pantalla.innerHTML = "<strong>Revisando que el clutch este activado</strong>"; }, 2000);
            setTimeout(() => { pantalla.innerHTML = `Clutch ${this.clutch}`; }, 3000);
            if (this.clutch != "activado") {
                setTimeout(() => { pantalla.innerHTML = "Activando clush"; }, 3500);
                setTimeout(() => { pantalla.innerHTML = "¡Todo correcto!"; }, 5000);
                this.clutch = "activado";
            } else {
                setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 3500);
            }

            //Verificando freno de pedal activado
            setTimeout(() => { pantalla.innerHTML = "<strong>Revisando que freno de pedal este activado</strong>"; }, 6000);
            setTimeout(() => { pantalla.innerHTML = `Freno de pedal ${this.freno}`; }, 8000);
            if (this.freno == "activado") {
                setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 9000);
            } else {
                setTimeout(() => { pantalla.innerHTML = "Activando freno de pedal"; }, 9000);
                setTimeout(() => { pantalla.innerHTML = "¡Todo correcto!"; }, 9500);
                this.freno = "activado";
            }

            //Verificando freno de emergencia desactivado
            setTimeout(() => { pantalla.innerHTML = "<strong>Revisando freno de emergencia desactivado</strong>"; }, 10000);
            setTimeout(() => { pantalla.innerHTML = `Freno de emergencia ${this.frenoEmergencia}`; }, 12000);
            if (this.frenoEmergencia == "desactivado") {
                setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 13000);
            } else {
                setTimeout(() => { pantalla.innerHTML = "Desactivando freno de emergencia"; }, 13000);
                setTimeout(() => { pantalla.innerHTML = "¡Todo correcto!"; }, 13500);
                this.frenoEmergencia = "desactivado";
            }

            //Poner cambio en primera
            setTimeout(() => { pantalla.innerHTML = `Cambio en ${this.cambio}.`; }, 14000);
            if (this.cambio == "neutro") {
                setTimeout(() => { pantalla.innerHTML = "<strong>Configurando cambio en primera</strong>"; }, 15000);
                setTimeout(() => { cambio.innerHTML = this.cambio; }, 16000);
                setTimeout(() => { pantalla.innerHTML = "Ahora está en el cambio correcto para arrancar"; }, 17000);
                this.cambio = "primera";
            } else {
                setTimeout(() => { pantalla.innerHTML += "Cambio correcto para arrancar"; }, 17000);
            };

            //Poniendo freno de pedal desactivado
            setTimeout(() => { pantalla.innerHTML = `Freno de pedal ${this.freno}`; }, 19000);
            setTimeout(() => { pantalla.innerHTML = "<strong>Se debe desactivar el freno de pedal</strong>"; }, 20000);
            if (this.freno == "desactivado") {
                setTimeout(() => { pantalla.innerHTML += " ¡Todo correcto!"; }, 22000);
            } else {
                setTimeout(() => { pantalla.innerHTML = "Desactivando el freno de pedal"; }, 22000);
                this.freno = "desactivado";
            }

            //Verificación final de las condiciones del arranque
            if (this.clutch == "activado" && this.frenoEmergencia == "desactivado" && this.cambio == "primera" && this.freno == "desactivado") {
                setTimeout(() => { pantalla.innerHTML = "<strong>Carro listo para arrancar</strong>" }, 24000);
                setTimeout(() => {
                    pantalla.innerHTML += " Acelerando y solanto clutch lentamente";
                    this.carroArrancado = true;
                    Toyota.ponerMarcha();
                }, 25000);

            }
        } else {
            cajaAvisos = document.getElementById("cajaAvisos").style.display = "block";
            avisos.innerHTML = "<strong>Error</strong> <br>el carro aún no está encendido o no ha seleccionado el destino";
            setTimeout(() => {
                cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
            }, 3000);

        }

    }
    //Metodo para realizar los giros del carro
    girarCarro(evento) {
        let pantalla = document.getElementById("pantalla");
        //let giros = document.getElementById("giros");

        if (this.carroArrancado === true) {
            if (direccional === true) {
                //R
                if (evento === 82) {
                    giros.innerHTML = '<p> Realizando giro a la derecha</p>';
                    setTimeout(() => {
                        giros.innerHTML = '<p> Giró a la derecha. <strong>Direcionales desactivadas</strong></p>';
                        direccional = false;
                    }, 2000);
                    setTimeout(() => { giros.innerHTML = ''; }, 3000);

                    //L
                } else if (evento === 76) {
                    giros.innerHTML += '<br><p> Realizando giro a la izquierda</p>';
                    setTimeout(() => {
                        giros.innerHTML += '<br><p> Giró a la izquierda. <strong>Direcionales desactivadas</strong></p>';
                        direccional = false;
                    }, 2000);
                    setTimeout(() => { giros.innerHTML = ''; }, 3000);
                }
            } else if (evento === 76 || evento === 82) {
                cajaAvisos = document.getElementById("cajaAvisos").style.display = "block";
                avisos.innerHTML = "<p>¡Error, direccionales apagadas!</p>";
                setTimeout(() => {
                    cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
                }, 3000);
                
               
            }
        } else if (evento === 76 || evento === 82) {
            cajaAvisos = document.getElementById("cajaAvisos").style.display = "block";
            avisos.innerHTML = "<p>Aún el carro no ha arrancado, no puede hacer giros</p>";
            setTimeout(() => {
                cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
            }, 3000);
            setTimeout(() => { giros.innerHTML = "" }, 2000);
        }
    }

    //Metodo para poner en marcha hasta sexta
    ponerMarcha() {

        if (this.carroArrancado == true) {
            let pantalla = document.getElementById("pantalla")
            this.distanciaRecorrida = this.distanciaRecorrida / 3.6;
            let distanciaMS = Math.round(this.distanciaRecorrida);
            console.log("ca " + distanciaMS);
            let velocimetro = document.getElementById("velocimetro");
            let cambio = document.getElementById("cambio");
            let array = [30, 40, 50, 120];
            let p = 0;
            let i = 0;
            let cambios = ["tercera", "cuarta", "quinta", "sexta"];
            let recorrido = 0;
            pantalla.innerHTML = "<strong>Cambiando a segunda el carro.</strong><br>(El carro a recorrido 6 metros)";
            setTimeout(() => {
                pantalla.innerHTML = "";
            }, 2000);
            let intervalo = setInterval(function () {
                setTimeout(() => {
                    console.log("ds" + recorrido);
                    this.tiempoRecorrido++;
                    let nombreDestino = this.nombreDestino
                    console.log(this.nombreDestino)
                    if (i <= 152) {
                        if (i < 30) {
                            this.cambio = "segunda";
                            recorrido = i;
                            console.log(this.nombreDestino)
                            pantalla.innerHTML = `Faltan: ${distanciaMS - i} metros para llegar al destino `;
                            cambio.innerHTML = this.cambio;
                        }
                        else if (i >= array[p]) {
                            this.cambio = cambios[p];
                            recorrido = i;
                            pantalla.innerHTML = `Faltan: ${distanciaMS - i} metros para llegar al destino `;
                            cambio.innerHTML = this.cambio;
                            p++
                        }
                        else {
                            recorrido = i;
                            pantalla.innerHTML = `Faltan: ${distanciaMS - i} metros para llegar al destino `;
                            cambio.innerHTML = this.cambio;
                        }
                    }
                    i++;
                    if (recorrido >= distanciaMS) {
                        pantalla.innerHTML = `Faltan: 0 metros para llegar al destino `;
                        let paradas = (this.cont_frenos * 5) * 1000;
                        setTimeout(() => {
                            Toyota.finalizarRecorrido();
                            clearInterval(intervalo);
                        }, paradas);
                        
                    }
                }, 1000);
            }, 1000);
        }
    }

    //Metodo para frenar el carro
    frenarCarro() {
        if (this.carroArrancado == true) {
            let pantalla = document.getElementById("pantalla");
            let cambio = document.getElementById("cambio");
            pantalla = document.getElementById("pantalla").style.display = "none"
            cambio = document.getElementById("cambio").style.display = "none"
           
            this.cont_frenos++;
            console.log(this.cont_frenos);
            
           

            // Creamos el atributo data-class con el contenido after
            document.getElementById("fondo").setAttribute('data-class', 'after');

    
                //Se muestra la imagen de stop
                let estacionarias = document.getElementById("estacionarias");
                estacionarias.innerHTML = '<img src="./img/Spain_traffic_signal_r2.svg.png" alt="img" class="stop">';

                //Cuenta regresiva
                let timeleft = 5;
                let downloadTimer = setInterval(function () {
                    document.getElementById("countdown").textContent = timeleft;
                    timeleft--;
                    if (timeleft < 0)
                        clearInterval(downloadTimer);
                    else if (timeleft == 0)
                        setTimeout(() => {
                            document.getElementById("fondo").removeAttribute('data-class', 'after');
                            document.getElementById("frenosCarro").style.display = "none";
                            pantalla = document.getElementById("pantalla").style.display = "block"
                            cambio = document.getElementById("cambio").style.display = "block"
                            //Arrancando carro de nuevo. 
                            
                        }, 1500);
                }, 1000);
            
        } else {
            cajaAvisos = document.getElementById("cajaAvisos").style.display = "block";
            avisos.innerHTML = "<p>No se puede frenar en estos momentos</p>";
            setTimeout(() => {
                cajaAvisos = document.getElementById("cajaAvisos").style.display = "none"
            }, 2000);
        }
    }


    //Llegar el destino final y frenar
    finalizarRecorrido() {
        let pantalla = document.getElementById("pantalla");
        pantalla.innerHTML = `Llegaste ${this.nombreDestino}`;
        pantalla.innerHTML += "Activando clutch y freno";
        setTimeout(() => {
            pantalla.innerHTML = "Reversando carro";
            let cambio = document.getElementById("cambio");
            cambio.innerHTML = "Reversa";
        }, 2000);
        setTimeout(() => {
            pantalla.innerHTML = "Carro parqueado";
            cambio.innerHTML = "Reversa";
        }, 4000);
        setTimeout(() => {
            pantalla.innerHTML = "Frenando el carro, presionando clutch, poniendo carro en neutro y activando freno de emergencia";
            this.cambio = "neutro";
            this.frenoEmergencia = "activado";
            cambio.innerHTML = this.cambio;
        }, 5000);
       
            setTimeout(() => {
                pantalla.innerHTML = "Apagando el carro";
                Toyota.faseDos();
            }, 7000);
      
    }

    faseDos() {
        let tiempoLlegadaS = this.tiempoRecorrido + (this.cont_frenos * 60) + 7;
        let tiempoLlegadaH = Math.round(tiempoLlegadaS * 3.6);
        let pantalla = document.getElementById("pantalla");
        let promedioVelocidad = Math.round(this.distanciaRecorrida/2);
        pantalla.innerHTML = "Fase II: El tiempo en total que tardó en llegar fue de: " + tiempoLlegadaH + " Horas";
        
        
        pantalla.innerHTML += "<br>La velocidad promedio es: " + promedioVelocidad + " Km/h";
        pantalla.innerHTML += "<br>La velocidad máxima es: 140 Km/h";
    }
}

//Se crea nuevo objeto
const Toyota = new Carro("neutro", "activado", "activado", "activado");

/*Cada vez que den click en el id asignado en html, llamado en las siguientes líneas, 
se ejecuta la funcion correspondiente*/

//Evento de encender 
let encender = document.getElementById("encender");
encender.addEventListener("click", encendido);
function encendido() {
    Toyota.encenderCarro();
}

//Evento arrancar
let arrancar = document.getElementById("arrancar");
arrancar.addEventListener("click", arranque);
function arranque() {
    Toyota.arrancarCarro();
}

//Evento seleccionar destino
let btnDestino = document.getElementById("destino");
btnDestino.addEventListener("click", destino);
function destino() {
    Toyota.seleccionarDestino();
}

//Evento girar
document.addEventListener('keydown', function (evt) {
    let tecla = evt.keyCode;
    Toyota.girarCarro(tecla);
});
let direccional = document.getElementById("direccional");
direccional.addEventListener("click", direccionalActivada);
function direccionalActivada() {
    giros.innerHTML = '<p>Direccionales activadas</p><br>';
    direccional = true;
}

//Evento frenos
document.getElementById('frenos').onclick = function () {
    Toyota.frenarCarro();
};



