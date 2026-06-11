function verificar(){
    let idade = document.getElementById('idade').value;

    if(idade < 0){
        window.alert('Idade não pode ser negativa!');
    }
    else if(idade >= 18){
        document.getElementById('saida').innerText = "Maior de idade";
    }else{
        document.getElementById('saida').innerText = "Menor de idade";
    }
}