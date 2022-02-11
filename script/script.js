
var status = 1;
function acionar() {
    var lampada = document.getElementById("lampada")
    var quarto = document.getElementById("quarto")
    if (status == 1) {
        status = 0;
        lampada.setAttribute("src", "img/acesa.png")
        quarto.style.backgroundColor = "yellow"
    } else {
        status = 1;
        quarto.style.backgroundColor = "gray"
        lampada.setAttribute("src", "img/apagada.png")

    }

}
