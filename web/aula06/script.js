function somar(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = document.getElementById('resultado');

    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);
    var soma = n1 + n2;    

    resultado.innerHTML = `O resultado é ${soma}!`;
}