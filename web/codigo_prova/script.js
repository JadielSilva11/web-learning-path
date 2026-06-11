function registrar(){
    let nome = document.getElementById("nome");
    let loc = document.getElementById("local");
    let atv = document.getElementById("atv")
    let duracao_h = Number(document.getElementById("duracao").value);
    let duracao_m = duracao_h * 60;

    let table = document.getElementById("table");
    createElement("tr");
    tr.innerText = nome loc atv duracao_h duracao_m;
    table.appendChild("tr");

}