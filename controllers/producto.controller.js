import { adminServices } from "../service/admin-service.js";

const nuevaListaProducto = (nombre, img, precio,categoria, id) => {
    const article = document.createElement("article")
    const contenido = `
        <img class="card__img" src="../assets/img/productos/${img}" alt="${nombre}">
        <div class="card__wrapper">
            <h4 class="card__title">${nombre}</h4>
            <p class="card__price">$${precio}</p>
            <p class="card__id">Categoria: ${categoria}</p>
            <div class="card__link">
                <a href="../admin/actualizar-producto.html?id=${id}" class="card__link--btn edit">
                    Editar
                </a>
            <button class="card__link--btn supr" type="button" id="${id}">
                    Eliminar
                </button>
            </div>
        </div>
    `
    article.classList.add("card")
    article.innerHTML = contenido

    const eliminar = article.querySelector(".supr")
    eliminar.addEventListener("click", () => {
        const id = eliminar.id
        adminServices.eliminarProducto(id)
        .then( () => {}).catch(error => console.log(error))
    })
    return article
}

const listProduct = document.querySelector("[data-admin-products]")

adminServices.listaProductos().then((data) => {
    data.forEach( ({ nombre, img, precio,categoria, id }) => {
        const nuevoProducto = nuevaListaProducto(nombre, img, precio, categoria, id)
        listProduct.appendChild(nuevoProducto)
    })
}).catch((error) => console.log(error))