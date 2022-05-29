window.onscroll = function () {
    if (window.scrollY < inicio.offsetHeight) {
        header.style = " background-color: rgba(0, 0, 0, 0); ";
    }
    if (window.scrollY >= inicio.offsetHeight) {
        header.style = " background-color: black;  ";
    }
}   


function entrar_help_desk(){
    window.location = "https://app.pipefy.com/public/form/WzMtrPNx"
}