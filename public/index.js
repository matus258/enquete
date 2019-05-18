let formulario = () => {
    document.forms['inicial'].hidden = true
    document.forms['formEnquete'].hidden = false
}
var quantidadePerguntas
let perguntas = () =>{
    quantidadePerguntas=document.getElementById("qntPerguntas").value 
    document.forms['formEnquete'].hidden = true
    document.forms['formPergunta'].hidden = false
}
var numero_pergunta = 2
let proximaPergunta = () =>{
    document.getElementById("descricaoPergunta").value = ""
    document.getElementById("alternativaA").value = ""
    document.getElementById("alternativaB").value = ""
    document.getElementById("alternativaC").value = ""
    document.getElementById("alternativaD").value = ""
    document.getElementById("alternativaE").value = ""
    document.getElementById("alternativaCertaA").checked = false
    document.getElementById("alternativaCertaB").checked = false
    document.getElementById("alternativaCertaC").checked = false
    document.getElementById("alternativaCertaD").checked = false
    document.getElementById("alternativaCertaE").checked = false
    document.getElementById("titulo").innerHTML = "<h1>Pergunta "+numero_pergunta+"</h1>"
    numero_pergunta +=1
    var btn_proxima_pergunta = document.getElementById("proxPergunta").innerHTML
    if (btn_proxima_pergunta == "Confirmar") {
        document.forms["formPergunta"].hidden = true
    }
    if (quantidadePerguntas == numero_pergunta-1) {
        document.getElementById("proxPergunta").innerHTML = "Confirmar"
    }

}