const botonAbrirMenu = document.getElementById("abrir-menu")
const botonCerrarMenu = document.getElementById("cerrar-menu")
const overlay = document.getElementById("overlay")


botonAbrirMenu.onclick = () => {
    overlay.classList.remove("ocultar")
}

botonCerrarMenu.onclick = () => {
    overlay.classList.add("ocultar")
}