function contar(){
    let numero = "";

    for(let i=0;i<=10;i++){
        numero += i + "<br>";
    }

    document.getElementById('numeros').innerHTML = numero;
}