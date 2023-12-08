function CalcularCategoria() {
    var nome = document.getElementById('nome').value
    var categoria = document.getElementById('idade').value
    var resp = document.getElementById('resp')

    console.log(nome)
    console.log(categoria)

    if (nome == '') {
        resp.innerHTML = 'Preencha o nome!'
    }
    else {
        switch (categoria) {
            case "mirim":
                resp.innerHTML = nome + ', você é um(a) atleta mirim!'
                break
            case "infantil":
                resp.innerHTML = nome + ', você é um(a) atleta infantil!'
                break
            case "juvenil":
                resp.innerHTML = nome + ', você é um(a) atleta juvenil!'
                break
            case "juniores":
                resp.innerHTML = nome + ', você é um(a) atleta junior!'
                break
            case "profissional":
                resp.innerHTML = nome + ', você é um(a) atleta profissional!'
                break
            default:
                resp.innerHTML = 'Selecione a faixa etária!'
        }
    }
}

function limparCategoria() {
    var nome = document.getElementById('nome')
    var resp = document.getElementById('resp')
    var categoria = document.getElementById('idade')
    nome.value = ""
    resp.innerHTML = ''
    categoria.value = ''

}