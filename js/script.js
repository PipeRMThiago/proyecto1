//FUNCION PARA MOVER EL H1 CON EL SCROLL
//FUNCION PARA MOVER EL H1 CON EL SCROLL


let encabezado = document.querySelector('h1');
let elemento = document.querySelector('html');

onscroll = function () {
    if (elemento.scrollTop > '50') {
        encabezado.classList.add('mover');
    }
}

let lista = document.querySelector('header nav ul');
let menu = document.querySelector('i');



//FUNCION PARA MOSTRAR LA UL CON EL CLICK
//FUNCION PARA MOSTRAR LA UL CON EL CLICK
function mostrarMenu() {

    if (lista.style.display === 'none') {
        lista.style.display = 'flex';
        menu.classList.add('fa-xmark');
        menu.classList.remove('fa-bars');


    } else {
        lista.style.display = 'none';
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');

    }
}
menu.addEventListener('click', mostrarMenu);


//FUNCION PARA MOSTRAR LOS DIV DE LOS SERVICIOS
//FUNCION PARA MOSTRAR LOS DIV DE LOS SERVICIOS



/* let serviciouno = document.querySelector('.serviciouno');
let boton = document.querySelector('#leermas');
let serviciodos = document.querySelector('.serviciodos');
let serviciotres = document.querySelector('.serviciotres');
let botondos = document.querySelector('#leermasdos');
let botontres = document.querySelector('#leermastres');

function mostrarServicioUno() {
    if (serviciouno.style.display == "block") {
        serviciouno.style.display = 'none';
    } else {
        serviciouno.style.display = 'block';
        serviciodos.style.display = 'none';
        serviciotres.style.display = 'none';
    }
}
boton.addEventListener('click', mostrarServicioUno);

function mostrarServicioDos() {

    if (serviciodos.style.display === 'block') {
        serviciodos.style.display = 'none';
    } else {
        serviciodos.style.display = 'block';
        serviciouno.style.display = 'none';
        serviciotres.style.display = 'none';
    }
}
botondos.addEventListener('click', mostrarServicioDos);

function mostrarServicioTres() {
    if (serviciotres.style.display === 'block') {
        serviciotres.style.display = 'none';
    } else {
        serviciotres.style.display = 'block';
        serviciouno.style.display = 'none';
        serviciodos.style.display = 'none';


    }
}
botontres.addEventListener('click', mostrarServicioTres);
 */
//FUNCION PARA MOSTRAR LOS DIV DE LOS SERVICIOS USANDO CLASSLIST Y CLASE VISIBLE
//FUNCION PARA MOSTRAR LOS DIV DE LOS SERVICIOS USANDO CLASSLIST Y CLASE VISIBLE

let serviciouno = document.querySelector('.serviciouno');
let boton = document.querySelector('#leermas');
let serviciodos = document.querySelector('.serviciodos');
let serviciotres = document.querySelector('.serviciotres');
let botondos = document.querySelector('#leermasdos');
let botontres = document.querySelector('#leermastres');


function mostrarServicioUno() {
    if (serviciouno.classList.contains('visible')) {
        serviciouno.classList.remove('visible');
    } else {
        serviciouno.classList.add('visible');
        serviciodos.classList.remove('visible');
        serviciotres.classList.remove('visible');
    }
}
boton.addEventListener('click', mostrarServicioUno);

function mostrarServicioDos() {
    if (serviciodos.classList.contains('visible')) {
        serviciodos.classList.remove('visible');

    } else {
        serviciodos.classList.add('visible');
        serviciouno.classList.remove('visible');
        serviciotres.classList.remove('visible');

    }
}
botondos.addEventListener('click', mostrarServicioDos);

function mostrarServicioTres(){
    if (serviciotres.classList.contains('visible')){
        serviciotres.classList.remove('visible');
    } else {
        serviciotres.classList.add('visible');
        serviciodos.classList.remove('visible');
        serviciouno.classList.remove('visible');
    }
}
botontres.addEventListener('click', mostrarServicioTres);



//FUNCION PARA CERRAR DIVS
//FUNCION PARA CERRAR DIVS

function cerrarDivUno(){
    serviciouno.classList.remove('visible');
}
serviciouno.addEventListener('click', cerrarDivUno);

function cerrarDivDos(){
    serviciodos.classList.remove('visible');
}
serviciodos.addEventListener('click', cerrarDivDos);

function cerrarDivTres (){
    serviciotres.classList.remove('visible');
}
serviciotres.addEventListener('click', cerrarDivTres);




//CARRUSEL
//CARRUSEL

let carruselTestimonios = document.querySelector('.testimonios');
let testimonio = document.querySelectorAll('.testimonio');
let totalTestimonios = testimonio.length;
let contador = 0;
/* let adelante = document.querySelector('.derecha');
let atras = document.querySelector('.izquierda'); */

function avanzar(){
    if (contador < totalTestimonios - 1){
        contador++;
        carruselTestimonios.style.transform = "translateX(-" + (contador * 100) + '%';
    }
}
adelante.addEventListener('click', avanzar);

function atrasar(){
    if(contador > 0){
        contador--;
        carruselTestimonios.style.transform = "translateX(-" + (contador * 100) + '%';
    }
}
atras.addEventListener('click', atrasar);