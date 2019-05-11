let formulario = () => {
    document.forms['inicial'].hidden = true
    document.forms['formEnquete'].hidden = false
}

let perguntas = () =>{
    document.forms['formEnquete'].hidden = true
    document.forms['formPergunta'].hidden = false
}