const activePage = window.location.pathname;
console.log(activePage);

const navlinks = document.querySelectorAll(".nav-links a:not(:last-child)")
navlinks.forEach((link) =>{
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active")
    }
})


const hamCont = document.querySelector(".ham-cont")
const navLinksCont = document.querySelector(".nav-links")
const navSocials = document.querySelector(".nav-socials")
const navLinks = document.querySelectorAll(".nav-links a")

const ham = document.querySelector(".ham-icon").addEventListener("click", ()=>{
    hamCont.classList.toggle("active")
    navLinksCont.classList.toggle("active")
    navSocials.classList.toggle("active")
})
navLinks.forEach((navlink) =>{
    navlink.addEventListener("click", ()=>{
        hamCont.classList.remove("active")
        navLinksCont.classList.remove("active")
        navSocials.classList.remove("active")
    })
})
document.addEventListener("click", (e)=>{
    if (!hamCont.contains(e.target)) {
        hamCont.classList.remove("active")
        navLinksCont.classList.remove("active")
        navSocials.classList.remove("active")
    }
})