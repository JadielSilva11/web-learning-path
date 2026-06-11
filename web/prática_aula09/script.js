function salvar(){
    let nome = document.getElementById('usuario').value;
    
    if(nome.length == 0){
        window.alert('É necessário inserir um nome!');
    }else{
        localStorage.setItem("Usuário", nome);
        window.alert('Nome salvo no sistema!');
    }
}

function exibir(){
    let nomesalvo = localStorage.getItem("Usuário");

    let exibir = document.getElementById('resultado');

    exibir.innerText = nomesalvo;
}