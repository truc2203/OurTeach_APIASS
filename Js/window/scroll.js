window.onscroll = function(){
    wdscroll()
}
const navbar = document.getElementById("navbar")
const logo = document.getElementById("logo")
const wdscroll = () => {
    if(window.pageYOffset >= 1)
    {
        navbar.classList.add("sticky")
        logo.style.display = "none"
        navbar.style.transition = "all 1s ease"
    }
    else{
        navbar.classList.remove("sticky")
        logo.style.display = "block"
        navbar.style.transition = "all 1s ease"

    }
}