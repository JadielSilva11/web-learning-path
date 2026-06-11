function saveAluno(){
    let nome = document.getElementById('aluno').value;
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    alunos.push(nome);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    window.alert('Aluno salvo com sucesso!');
}

function findAluno(){
    let busca = document.getElementById('buscarAluno').value;
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let exibicao = '';

    for(let aluno of alunos){
        if(aluno == busca){
            exibicao = 'Aluno encontrado: ' + aluno;
        }
    }

    document.getElementById('exibicao').innerText = exibicao;
}

function findAll(){
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let texto = '';

    for(let aluno of alunos){
        texto += aluno + '<br>';
    }

    document.getElementById('exibicao').innerHTML = 'Alunos: ' + texto;
}