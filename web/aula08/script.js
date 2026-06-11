function adicionarDisciplina(){
    let codigo = document.getElementById("codigo").value;
    let nome = document.getElementById("nome").value;
    let carga = document.getElementById("carga").value;

    let linha = document.createElement("tr");
    let colCodigo = document.createElement("td");
    let colNome = document.createElement("td");
    let colCarga = document.createElement("td");

    colCodigo.innerText = codigo;
    colNome.innerText = nome;
    colCarga.innerText = carga + " horas";

    linha.appendChild(colCodigo);
    linha.appendChild(colNome);
    linha.appendChild(colCarga);

    let corpo = document.getElementById("Tcorpo");
    corpo.appendChild(linha);
}