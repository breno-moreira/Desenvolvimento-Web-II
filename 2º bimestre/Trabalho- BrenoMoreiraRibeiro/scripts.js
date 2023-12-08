document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const medico = {
        nome: document.getElementById('nome').value,
        crm: document.getElementById('crm').value,
        especialidade: document.getElementById('especialidade').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value
    };

    if(localStorage.getItem('medicos') === null) {
        const medicos = [];
        medicos.push(medico);
        localStorage.setItem('medicos', JSON.stringify(medicos));
    } else {
        const medicos = JSON.parse(localStorage.getItem('medicos'));
        medicos.push(medico);
        localStorage.setItem('medicos', JSON.stringify(medicos));
    }

    exibirMedicos();
    this.reset();
});

function exibirMedicos() {
    const medicos = JSON.parse(localStorage.getItem('medicos'));
    let tbody = document.getElementById('lista');
    tbody.innerHTML = '';

    medicos.forEach(function(medico, index) {
        let tr = tbody.insertRow();
        Object.values(medico).forEach(function(valor) {
            let td = tr.insertCell();
            td.textContent = valor;
        });

        let acoes = tr.insertCell();
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.setAttribute('onclick', 'excluirMedico(' + index + ')');
        acoes.appendChild(botaoExcluir);
    });
}

function excluirMedico(index) {
    const medicos = JSON.parse(localStorage.getItem('medicos'));
    medicos.splice(index, 1);
    localStorage.setItem('medicos', JSON.stringify(medicos));
    exibirMedicos();
}

function salvar(index){
    var dados = JSON.stringify(itens);
    localStorage.setItem("dados" , dados);
}