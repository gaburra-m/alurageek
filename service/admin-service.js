const URL = "http://localhost:3000/productos"

const listaProductos = () => fetch(URL).then(respuesta => respuesta.json())

const crearProducto = (nombre, img, precio, categoria, desc) =>{
    return fetch(URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, img, precio, categoria, desc, id: uuid.v4()})
    })
    }

const eliminarProducto = (id) => {
    return fetch(`${URL}/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`${URL}/${id}`).then(respuesta => respuesta.json())
}

const actualizarProducto = (nombre, img, precio, categoria, desc, id) => {
    return fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, img, precio, categoria, desc})
    })
    .then((respuesta) => respuesta)
    .catch(error => console.log(error))
}

    export const adminServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
    }