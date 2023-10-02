"use strict";

document.querySelector(".icono-carrito").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}