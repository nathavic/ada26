const botonAbrirMenu = document.getElementById("abrir-menu")
const botonCerrarMenu = document.getElementById("cerrar-menu")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")
const gatito = document.getElementById("gatito")


botonAbrirMenu.onclick = () => {
    overlay.classList.remove("ocultar")
    document.body.classList.add("no-scroll")
}

botonCerrarMenu.onclick = () => {
    overlay.classList.add("ocultar")
    document.body.classList.remove("no-scroll")
}



gatito.onclick = () => {
    alert("miau")
}