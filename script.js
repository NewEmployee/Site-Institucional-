window.onscroll = function () {
    if (window.scrollY < inicio.offsetHeight) {
        header.style = " background-color: rgba(0, 0, 0, 0); ";
    }
    if (window.scrollY >= inicio.offsetHeight) {
        header.style = " background-color: black; ";
    }
}