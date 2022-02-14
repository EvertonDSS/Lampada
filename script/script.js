
var status = 1;
var lampada = document.getElementById("lampada")
var quarto = document.getElementById("quarto")
var botao = document.getElementById("botao")

function acionar() {

    if (status == 1) {
        status = 0;
        lampada.setAttribute("src", "imagens/apagada.png")
        quarto.style.backgroundColor = "gray"
        botao.value = "Acender"
        document.getElementById("titulo").style.color = "gray"
    } else {
        status = 1;
        quarto.style.backgroundColor = "gray"
        lampada.setAttribute("src", "imagens/acesa.png")
        quarto.style.backgroundColor = "yellow"
        botao.value = "Apagar"
        document.getElementById("titulo").style.color = "yellow"
    }

}
