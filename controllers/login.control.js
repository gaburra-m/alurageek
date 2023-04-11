import { loginServices } from "../service/login-service.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailC = document.querySelector("[data-email]").value
    const passC = document.querySelector("[data-pass]").value
    loginServices.login().then((data) => {
        data.forEach( ({ user, pass })  => {
            isLogin(user, pass)
        })
    })
    
    const isLogin = (user, pass) => {
        if( emailC === user && passC === pass) {
            window.location.href = "./admin/administrador.html"
        } else {
            alert("El Email o la Contraseña son incorrectas")
            form.reset()
        }
    }
    
})