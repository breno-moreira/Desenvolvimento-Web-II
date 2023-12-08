function CalcularCategoria() {
    var nome = document.getElementById('nome')
    var nasc = document.getElementById('nasc')
    var resp = document.getElementById('resp')

    if (nome.value == '' && nasc.value == '') {
        resp.innerHTML = 'Preencha os campos!'
    } else if ((2023 - Number(nasc.value)) < 14) {
        resp.innerHTML = nome.value + ', você é um(a) atleta mirim!'
    } else if  ((2023 - Number(nasc.value)) == 14 || (2023 - Number(nasc.value)) == 15){
        resp.innerHTML = nome.value + ', você é um(a) atleta infantil!'
    } else if  ((2023 - Number(nasc.value)) == 16 || (2023 - Number(nasc.value)) == 17){
        resp.innerHTML = nome.value + ', você é um(a) atleta juvenil!'
    }else if  ((2023 - Number(nasc.value)) >= 18 && (2023 - Number(nasc.value)) <= 20){
        resp.innerHTML = nome.value + ', você é um(a) atleta junior!'
    } else {
        resp.innerHTML = nome.value + ', você é um(a) atleta profissional!'
    }
}

function limparCategoria() {
    var nome = document.getElementById('nome')
    var nasc = document.getElementById('nasc')
    nome.value = ""
    nasc.value = ""
    resp.innerHTML = ''

}