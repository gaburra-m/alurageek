import { adminServices } from "../service/admin-service.js";
// import { v4 as uuidv4 } from 'uuid';

const formulario = document.querySelector("[data-form]")


formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const img = document.querySelector("[data-img]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const categoria = document.querySelector("[data-categoria]").value
    const desc = document.querySelector("[data-desc]").value

    
    adminServices.crearProducto(nombre, img, precio, categoria, desc)
    .then(() => {       
        window.location.href = "/admin/edicion-concluida.html"
    }).catch(error => {
        window.location.href = "/admin/error.html"
    })
})

