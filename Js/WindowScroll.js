window.onscroll = function(){
    wdscroll()
}
var navbar = document.getElementById("navbar")
var logo = document.getElementById("logo")
function wdscroll(){
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