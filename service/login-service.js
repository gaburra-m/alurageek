const URL = "http://localhost:3000/login"
const login = () => fetch(URL).then(respuesta => respuesta.json())

export const loginServices = {
    login
}