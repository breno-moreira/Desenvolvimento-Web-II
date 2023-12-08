function Calcular() {
    var operacao = document.getElementById('operacao').value
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var resp1 = document.getElementById('resp1')
    var resp2 = document.getElementById('resp2')
    var resultado = 0;

    if (num1 == '' || num2 == '') {
        resp2.innerHTML = 'Preencha todos os campos!'
    }
    else {
        switch (operacao) {
            case "adicao":
                resultado = num1 + num2
                resp1.innerHTML = 'Operação selecionada: Adição '
                resp2.innerHTML = "Resultado: " + resultado
                break
            case "subtracao":
                resultado = num1 - num2
                resp1.innerHTML = 'Operação selecionada: Subtração'
                resp2.innerHTML = "Resultado: " + resultado
                break
            case "multiplicacao":
                resultado = num1 * num2
                resp1.innerHTML = 'Operação selecionada: Multiplicação'
                resp2.innerHTML = "Resultado: " + resultado
                break
            case "divisao":
                resultado = num1 / num2
                resp1.innerHTML = 'Operação selecionada: Divisão'
                resp2.innerHTML = "Resultado: " + resultado
                break
            case "resto":
                resultado = num1 % num2
                resp1.innerHTML = 'Operação selecionada: Resto'
                resp2.innerHTML = "Resultado: " + resultado
                break
            default:
                resp2.innerHTML = 'Selecione uma operação!'
        }
    }

}

function limpar() {
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var resp1 = document.getElementById('resp1')
    var resp2 = document.getElementById('resp2')
    var operacao = document.getElementById('operacao')

    num1.value = ''
    num2.value = ''
    operacao.value = ''
    resp1.innerHTML = ''
    resp2.innerHTML = 'Resultado:'
    
}