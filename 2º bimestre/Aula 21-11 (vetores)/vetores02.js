var itens = [];


function inserir() {
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");

    var pessoa = {}; //criar um novo objeto
    pessoa.nome = nome.value;
    pessoa.telefone = telefone.value;
    pessoa.email = email.value;

    itens.push(pessoa);
    //limpar o input apos adicionar o iten 
    nome.value = "";
    telefone.value = "";
    email.value = "";
    //coloca o foco do curso no campo
    nome.focus();
    listar();
}

function listar() {
    var tab = document.getElementById("tabela");
    tab.innerHTML = ""; // limpar a tabela 
    //montar a linha de titulo da tabela
    tab.innerHTML += "<th>Nome</th><th>Telefone</th><th>E-mail</th>";
    for (var i in itens) {
        tab.innerHTML += "<tr><td>"
            + itens[i].nome
            + "<td></td>"
            + itens[i].telefone
            + "<td></td>"
            + itens[i].email
            + "<td></td>"
            + "<a herf='#' onclick= 'excluir(" + i + ")'>X</a>"
            + "<td></td>";
    }
}

function excluir(i) {
    itens.splice(i, 1);
    listar();
}
function salvar() {
    //converte o dados em uma string JSON
    var dados = JSON.stringify(itens);

    //salva os dados no localstorage
    localStorage.setItem("dados", dados);
}
function abrir() {
    //le os dados do localstorage
    var dados = localStorage.getItem("dados");

    //converte a STRING JSON em vetor novamente
    itens = JSON.parse(dados);

    //recarrega os dados 
    listar();
}