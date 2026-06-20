const carrusel = document.querySelector('.carrusel');
const cajas = document.querySelectorAll('.caja');
let indice = 0;

document.getElementById('btnSiguiente').addEventListener('click', () => {
    if (indice < cajas.length - 1) {
        indice++;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }
});

document.getElementById('btnAnterior').addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }
});