// VER DE INCLUIR FUNCIONALIDAD EXTRA Y REVISAR INDENTADO DEL CODIGO
//Declaración de variables
var nombreUsuario = 'Marco Luchi';
var saldoCuenta = 43000;
var limiteExtraccion = 3000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var saldoAnterior;  
var cuentaAmiga1= 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 1234;
var plazo=0;
var acum = 0;
/* Puse saldoAnterior en forma global, por que en la funcion haySaldoDisponible 
me daba error por haberla hecho local
asi que la hice global sin asignarle nada y le doy valor al momento de llamar a las funciones, espero este correcto */
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

iniciarSesion();
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limite = prompt('Ingrese nuevo limite de extraccion');
    if(isNaN(limite) === true || limite < 0 || limite === '' || limite === null){
        alert('Error. Ingrese valor valido')
        return;
        // Enter sin ningun valor da NaN
    }
    limite = parseInt(limite);
    limiteExtraccion = limite;
    actualizarLimiteEnPantalla();
    alert('El nuevo limite de extraccion es: '+ limite);
}
function extraerDinero() {
    saldoAnterior = saldoCuenta;
    var dineroAExtraer = prompt('Ingrese el monto a extraer');
    if(isNaN(dineroAExtraer) === true || dineroAExtraer < 0 || dineroAExtraer === '' || dineroAExtraer === null){
        alert('Error. Ingrese valor valido');
        return;
    }
    dineroAExtraer = parseInt(dineroAExtraer);
    haySaldoDisponible(dineroAExtraer);
}
function depositarDinero() {
    saldoAnterior = saldoCuenta
    var dineroADepositar = prompt('Ingrese el monto a depositar');
    if(isNaN(dineroADepositar) === true || dineroADepositar < 0 || dineroADepositar === '' || dineroADepositar === null){
        alert('Error. Ingrese valor valido');
        return;
    }
    dineroADepositar = parseInt(dineroADepositar);
    sumarDinero(dineroADepositar);
    actualizarSaldoEnPantalla();
    alert('Saldo Anterior: '+ saldoAnterior + '\r\n' + 'Dinero a depositar: ' + dineroADepositar + '\r\n' + 'Saldo actual: '+ saldoCuenta);
}

function pagarServicio() {

    var servicio = prompt('Ingrese que servicio quiere pagar:'+ '\r\n' + '1- Agua' + '\r\n' + '2- Telefono'+ '\r\n' + '3-Luz' + '\r\n' + '4-Internet');
    if(isNaN(servicio) === true || servicio < 0 || servicio === '' || servicio === null){
        alert('Error. Ingrese valor valido');
        return;
    }
    servicio = parseInt(servicio);
    if(servicio < 1 || servicio > 4){
            alert('El numero ingresado es invalido');
    }
    switch(servicio){
        case 1: 
                if(saldoCuenta < agua){
                    alert('No hay saldo disponible en la cuenta para pagar el servicio seleccionado');
                    break;
                } else{
                    saldoCuenta -= agua;
                    actualizarSaldoEnPantalla();
                    alert('Pagaste el agua');
                    break;
            }
        case 2: 
                if(saldoCuenta < telefono){
                    alert('No hay saldo disponible en la cuenta para pagar el servicio seleccionado');
                    break;
                } else{
                    saldoCuenta -= telefono;
                    actualizarSaldoEnPantalla();
                    alert('Pagaste el telefono');
                    break;
            }
        case 3: 
                if(saldoCuenta < luz){
                    alert('No hay saldo disponible en la cuenta para pagar el servicio seleccionado');
                    break;
                } else{
                    saldoCuenta -= luz;
                    actualizarSaldoEnPantalla();
                    alert('pagaste la luz');
                    break;
            }
        case 4: 
                if(saldoCuenta <  internet){
                    alert('No hay saldo disponible en la cuenta para pagar el servicio seleccionado');
                    break;
                } else{
                    saldoCuenta -= internet;
                    actualizarSaldoEnPantalla();
                    alert('Pagaste internet');
                    break;
            }
    }

}

function transferirDinero() {

    var monto = prompt('Ingrese el monto que desea transferir');
    if(isNaN(monto) === true || monto < 0 || monto === '' || monto === null){
        alert('Error. Ingrese valor valido');
        return;
    }
    monto = parseInt(monto);
    if(monto > saldoCuenta){

        alert('No hay saldo disponible para realizar la transferencia');
    }
    var cuenta = prompt('Ingrese numero de cuenta amigo');
   // cuenta = parseInt(cuenta);
    if(cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2){
            saldoCuenta -= monto;
            actualizarSaldoEnPantalla();
            alert('Se han transferido: ' + monto + '\r\n' + 'Cuenta Amiga: ' + cuenta );
    } else {

            alert('Error. Solo puede transferirse dinero a una cuenta amiga');
    }

}

function iniciarSesion() {

    var sesion = prompt('Ingrese el codigo de seguridad de su cuenta');
    if(sesion == codigoSeguridad){
       
            alert('Bienvenido Marco Luchi, ya puedas comenzar a realizar operaciones');
     } else{

            alert('Codigo incorrecto. El dinero ha sido retenido por cuestiones de seguridad');
            saldoCuenta = 0;
            limiteExtraccion = 0;
     }

}
function sumarDinero(dinero){
     saldoCuenta += dinero;
}

function sacarDinero(dinero){

    saldoCuenta -= dinero;

}
function haySaldoDisponible(dineroASacar){

    if(dineroASacar > saldoCuenta){
        alert('No hay saldo suficiente para realizar la extraccion');
    }
    else if(dineroASacar > limiteExtraccion){
        alert('Este monto excede el limite de extraccion de la cuenta');
    }else if(dineroASacar%100 != 0){ 

        alert('Esta cuenta solo entrega billetes de 100');
    }else{
         sacarDinero(dineroASacar);
         actualizarSaldoEnPantalla();
         alert('Saldo Anterior: '+ saldoAnterior + '\r\n' + 'Dinero a depositar: ' + dineroASacar + '\r\n' + 'Saldo actual: '+ saldoCuenta);
    }
}
function plazoFijo(){
            
            plazo = prompt('Ingrese valor a poner en Plazo Fijo');
            if(isNaN(plazo) === true || plazo < 0 || plazo === '' || plazo === null){
                alert('Error. Ingrese valor valido');
                return;
            }
            plazo = parseInt(plazo);
            
            if(plazo > saldoCuenta){
                    alert('No hay saldo suficiente para hacer el Plazo Fijo');
            } else {

                    acum += plazo;
                    saldoCuenta -= plazo;
                    alert('Dinero a Plazo Fijo: ' + acum + '\r\n' + 'Dinero restante en Cuenta: ' + saldoCuenta);
                    actualizarSaldoEnPantalla();
            }
}

function liberarPlazoFijo(){

                if(acum === 0){
                    alert('No tienes dinero en Plazo Fijo')
                } else{

                    saldoCuenta  += acum;
                    alert('Has liberado todo el dinero del Plazo Fijo' + '\r\n' + 'El dinero liberado fue : ' + acum);
                    actualizarSaldoEnPantalla();

                }
                acum = 0;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

