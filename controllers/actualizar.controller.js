import { adminServices } from "../service/admin-service.js"

const formulario = document.querySelector("[data-form]")

const obtenerInfo = async () => {
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    if(id === null) {alert("Ocurrio un error, intenta de nuevo")}

    const img = document.querySelector("[data-img]")
    const nombre = document.querySelector("[data-nombre]")
    const precio = document.querySelector("[data-precio]")
    const categoria = document.querySelector("[data-categoria]")
    const desc = document.querySelector("[data-desc]")

    try {
        const prod = await adminServices.detalleProducto(id)
        if (prod.img && prod.nombre && prod.precio && prod.categoria && prod.desc){
            img.value = prod.img
            nombre.value = prod.nombre
            precio.value = prod.precio
            categoria.value = prod.categoria
            desc.value = prod.desc
        }
    } catch (error) {
        alert("Ocurrio un error, intenta de nuevo2")
    }
}
obtenerInfo()

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    const img = document.querySelector("[data-img]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const categoria = document.querySelector("[data-categoria]").value
    const desc = document.querySelector("[data-desc]").value

    adminServices.actualizarProducto(nombre, img, precio, categoria, desc, id).then(() => {
        window.location.href = "./administrador.html"
    })
})