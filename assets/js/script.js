const searchIcon = document.querySelector("#searchIcon")
const searchBox = document.querySelector(".search-box")
const closeIcon = document.querySelector("#closeIcon")
const menuIcon = document.querySelector("#menuIcon")
const menuClose = document.querySelector("#menuClose")
const navLinks = document.querySelector(".nav-links")

searchIcon.addEventListener("click", () => {
    searchBox.classList.add("openSearch")
    searchIcon.classList.replace("active", "inactive")
    closeIcon.classList.replace("inactive", "active")
    navLinks.classList.remove("nav-open")
})

closeIcon.addEventListener("click", () => {
    searchBox.classList.remove("openSearch")
    searchIcon.classList.replace("inactive", "active")
    closeIcon.classList.replace("active", "inactive")
})

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("nav-open")
    searchBox.classList.remove("openSearch")
    closeIcon.classList.replace("active", "inactive")
    searchIcon.classList.replace("inactive", "active")
})

menuClose.addEventListener("click", () => {
    navLinks.classList.remove("nav-open")
})
