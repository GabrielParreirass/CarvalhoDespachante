function handleClickMobile() {

    const menuMobile = document.getElementById("menuMobile")


    menuMobile.classList.toggle("hidden")
    menuMobile.classList.toggle("show")


}

function handleCloseMobile() {
    const menuMobile = document.getElementById("menuMobile")

 
    menuMobile.classList.toggle("hidden")
    menuMobile.classList.toggle("show")
}


function handleClickArrow(e) {

    e.classList.toggle("disrotated")

    element = document.getElementById(e.id + "r")

    element.classList.toggle("toggleHiddenResposta")


}