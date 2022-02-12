// Case Sensitive
// nome é diferente de uma chamada Nome

//var:Serve para o Escopo Global
//let: Serve para Escopo Local
//const:Serve para o Escopo Global
// Escopo = local onde a variavel terá acesso ou não

function clique(){
alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = document.getElementsById ("email")
let assunto = document.getElementsById ("assunto")

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert ("Todos os campos são obrigatórios")
    }else{
        alert ("Olá " + nome.value + "! Seu email foi enviado com sucesso!")
    }
}