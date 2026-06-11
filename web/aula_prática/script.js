function registrar(){
    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servico").value;
    let tempo_h = Number(document.getElementById("tempo").value);
    let custo_h = Number(document.getElementById("custo").value);
    let tempo_min = tempo_h * 60;
    let custo_t = custo_h * tempo_h;

    let colNome = document.createElement("td");
    let colServico = document.createElement("td");
    let colTempo_h = document.createElement("td");
    let colTempo_min = document.createElement("td");
    let colCusto_h = document.createElement("td");
    let colCusto_t = document.createElement("td");

    colNome.innerText = nome;
    colServico.innerText = servico;
    colTempo_h.innerText = tempo_h;
    colTempo_min.innerText = tempo_min;
    colCusto_h.innerText = custo_h;
    colCusto_t.innerText = custo_t;

    let newLine = document.createElement("tr");

    newLine.appendChild(colNome);
    newLine.appendChild(colServico);
    newLine.appendChild(colTempo_h);
    newLine.appendChild(colTempo_min);
    newLine.appendChild(colCusto_h);
    newLine.appendChild(colCusto_t);

    let tbody = document.getElementById("corpo");
    tbody.appendChild(newLine);
}