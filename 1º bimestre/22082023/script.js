//Exercício 1

function calcularTroco() {
    var txt1 = document.getElementById('txt1').value
    var txt2 = document.getElementById('txt2').value
    var resp1 = document.getElementById('resp1')

    if (txt1 == '' || txt2 == '') {
        resp1.innerHTML = 'Preencha os campos!'
    } else {
        resp1.innerHTML = 'Troco: R$' + (Number(txt2) - Number(txt1)).toFixed(2)

    }
}

function limparTroco() {
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var resp1 = document.getElementById('resp1')
    txt1.value = ""
    txt2.value = ""
    resp1.innerHTML = 'Troco'

}

//Exercício 2

function calcularMedia() {
    var volta1 = document.getElementById('volta1').value
    var volta2 = document.getElementById('volta2').value
    var volta3 = document.getElementById('volta3').value
    var resp2 = document.getElementById('resp2')

    if (volta1 == '' || volta2 == '' || volta3 == '') {
        resp2.innerHTML = 'Preencha os campos!'
    } else {
        resp2.innerHTML = 'A média de tempo entre as voltas é: ' + ((Number(volta1) + Number(volta2) + Number(volta3)) / 3).toFixed(2) + ' min.'

    }
}

function limparMedia() {
    var volta1 = document.getElementById('volta1')
    var volta2 = document.getElementById('volta2')
    var volta3 = document.getElementById('volta3')
    var resp2 = document.getElementById('resp2')
    volta1.value = ""
    volta2.value = ""
    volta3.value = ""
    resp2.innerHTML = 'A média de tempo entre as voltas é:'

}

//Exercício 3

function CalcularPeso() {
    var altura = document.getElementById('altura').value
    var resp3 = document.getElementById('resp3')

    if (altura == '') {
        resp3.innerHTML = 'Preencha os campos!'
    } else {
        resp3.innerHTML = 'Seu peso ideal é: ' + ((altura * altura) * 25).toFixed(2) + 'kg'

    }
}

function limparPeso() {
    var altura = document.getElementById('altura')
    var resp3 = document.getElementById('resp3')
    altura.value = ""
    resp3.innerHTML = 'Seu peso ideal é:'

}
//Exercício 4

function CalcularBoleto() {
    var valorBoleto = document.getElementById('valorBoleto').value
    var diasAtraso = document.getElementById('diasAtraso').value
    var resp4 = document.getElementById('resp4')
    var multa = Number(valorBoleto) * 0.02
    var despesa = 2
    var jurosDias = Number(valorBoleto) * 0.05
    if (valorBoleto == '' || diasAtraso == '') {
        resp4.innerHTML = 'Preencha os campos!'
    } else {
        resp4.innerHTML = 'O valor a ser pago é: R$' + (Number(valorBoleto) + multa + despesa + jurosDias).toFixed(2)
    }
}

function limparBoleto() {
    var valorBoleto = document.getElementById('valorBoleto')
    var diasAtraso = document.getElementById('diasAtraso')
    var resp4 = document.getElementById('resp4')
    valorBoleto.value = ""
    diasAtraso.value = ""
    resp4.innerHTML = 'O valor a ser pago é: '

}

//Exercício 5

function CalcularGestacao() {
    var semanas = document.getElementById('semanas').value
    var dias = semanas * 7
    var quantMeses = dias / 30
    if (semanas == '') {
        resp5.innerHTML = 'Preencha os campos!'
    } else {
        resp5.innerHTML = 'Tempo de gestação: ' + Number(dias) + ' dias, ' + Number(quantMeses).toFixed(1) + ' meses.'
    }
}

function limparGestacao() {
    var semanas = document.getElementById('semanas')
    var resp5 = document.getElementById('resp5')
    semanas.value = ""
    resp5.innerHTML = 'Tempo de gestação: '

}

//Exercício 6

function CalcularCombustivel() {
    var distancia = document.getElementById('distancia').value
    var gasolina = document.getElementById('gasolina').value
    var alcool = document.getElementById('alcool').value
    var resp6 = document.getElementById('resp6')
    var gastoGasolina = (Number(distancia) * gasolina) / 11
    var gastoAlcool = (Number(distancia) * alcool) / 9

    if (distancia == '' || gasolina == '' || alcool == '') {
        resp6.innerHTML = 'Preencha os campos!'
    } else {
        resp6.innerHTML = 'Valores se abastecer: alcool = R$' + gastoAlcool.toFixed(2) + ' e gasolina = R$' + gastoGasolina.toFixed(2)
    }
}

function limparCombustivel() {
    var distancia = document.getElementById('distancia')
    var gasolina = document.getElementById('gasolina')
    var alcool = document.getElementById('alcool')
    distancia.value = ""
    gasolina.value = ""
    alcool.value = ""
    resp6.innerHTML = 'Valores se abastecer: '

}

//Exercício 7

function CalcularPreco() {
    var fabrica = document.getElementById('fabrica').value
    var impostos = (Number(fabrica) + (Number(fabrica) * 0.45))
    var distribuidor = impostos + impostos * 0.28
    var resp7 = document.getElementById('resp7')

    if (fabrica == '') {
        resp7.innerHTML = 'Preencha os campos!'
    } else {
        resp7.innerHTML = 'Custo do consumidor: R$' + distribuidor.toFixed(2)
    }
}

function limparPreco() {
    var fabrica = document.getElementById('fabrica')
    fabrica.value = ""
    resp7.innerHTML = 'Custo do consumidor: '

}





function Salvar() {
    var selectCorFundo = document.querySelector('#CorFundo').value
    var selectCorFundoCard = document.querySelector('#CorFundoCard').value
    var selectCorFonte = document.querySelector('#CorFonte').value
    var selectCorBotao1 = document.querySelector('#CorBotao1').value
    var selectCorBotao2 = document.querySelector('#CorBotao2').value
    var selectFonte = document.querySelector('#fonte').value

    var corFundoFonte = document.querySelector('.page')

    const linha = document.querySelectorAll(".linhaFlex");
    linha.forEach((item) => {
        if (selectFonte == 'times') {
            item.style.fontFamily = 'Times New Roman, Times, serif'
        }
        else if (selectFonte == 'arial') {
            item.style.fontFamily = 'Arial'
        }
        else {
            item.style.fontFamily = 'Arial'
        }
    });




    if (selectCorFundo == 'purple') {
        corFundoFonte.style.backgroundColor = 'purple'
    }
    else if (selectCorFundo == 'blue') {
        corFundoFonte.style.backgroundColor = 'blue'
    }
    else if (selectCorFundo == 'black') {
        corFundoFonte.style.backgroundColor = 'black'
    }
    else {
        corFundoFonte.style.backgroundColor = '#f9f9f9'
    }

    if (selectCorFonte == 'purple') {
        corFundoFonte.style.color = 'purple'
    }
    else if (selectCorFonte == 'blue') {
        corFundoFonte.style.color = 'blue'
    }
    else if (selectCorFonte == 'black') {
        corFundoFonte.style.color = 'black'
    }
    else {
        corFundoFonte.style.color = 'black'
    }

    const CorFundoCard = document.querySelectorAll(".container");
    CorFundoCard.forEach((item) => {
        if (selectCorFundoCard == 'purple') {
            item.style.backgroundColor = 'purple'
        }
        else if (selectCorFundoCard == 'blue') {
            item.style.backgroundColor = 'blue'
        }
        else if (selectCorFundoCard == 'black') {
            item.style.backgroundColor = 'black'
        }
        else {
            item.style.backgroundColor = 'white'
        }
    });

    const CorBotao1 = document.querySelectorAll(".botao");
    CorBotao1.forEach((item) => {
        if (selectCorBotao1 == 'purple') {
            item.style.backgroundColor = 'purple'
        }
        else if (selectCorBotao1 == 'blue') {
            item.style.backgroundColor = 'blue'
        }
        else if (selectCorBotao1 == 'black') {
            item.style.backgroundColor = 'black'
        }
        else {
            item.style.backgroundColor = 'rgb(228, 62, 190)'
        }
    });

    const CorBotao2 = document.querySelectorAll(".limpar");
    CorBotao2.forEach((item) => {
        if (selectCorBotao2 == 'purple') {
            item.style.backgroundColor = 'purple'
        }
        else if (selectCorBotao2 == 'blue') {
            item.style.backgroundColor = 'blue'
        }
        else if (selectCorBotao2 == 'black') {
            item.style.backgroundColor = 'black'
        }
        else {
            item.style.backgroundColor = 'rgb(238, 170, 222)'
        }
    });
}

function limparConfig() {
    document.querySelector('#CorFundo').value = 'white'
    document.querySelector('#CorFundoCard').value = 'white'
    document.querySelector('#CorFonte').value = 'white'
    document.querySelector('#CorBotao1').value = 'white'
    document.querySelector('#CorBotao2').value = 'white'
    document.querySelector('#fonte').value = 'padrao'

    Salvar()
    
}