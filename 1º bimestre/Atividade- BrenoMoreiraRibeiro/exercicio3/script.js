function visualizar() {
    var dataAtual = new Date();
    var numeroDiaSemana = dataAtual.getDay();
    var resp = document.getElementById('resp')

    switch(numeroDiaSemana){
        case 0:
            resp.innerHTML = 'Domingo'
            break
        case 1:
            resp.innerHTML = 'Segunda-feira'
            break
        case 2:
            resp.innerHTML = 'Terça-feira'
            break
        case 3:
            resp.innerHTML = 'Quarta-feira'
            break
        case 4:
            resp.innerHTML = 'Quinta-feira'
            break
        case 5:
            resp.innerHTML = 'Sexta-feira'
            break
        case 6:
            resp.innerHTML = 'Sábado'
            break
        default:
            resp.innerHTML = ''
    }
}
function limparCategoria() {
    var nome = document.getElementById('nome')
    var nasc = document.getElementById('nasc')
    nome.value = ""
    nasc.value = ""
    resp.innerHTML = ''

}