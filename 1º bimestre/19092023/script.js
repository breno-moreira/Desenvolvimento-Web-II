//Exercício 1

function calcular() {
    var produto = document.getElementById('produto')
    var prodSelected = produto.options[produto.selectedIndex].text;
    var quant = document.getElementById('quant')
    var dinheiro = document.getElementById('dinheiro');
    var entrega = document.getElementById('entrega');
    var resp1 = document.getElementById('resp1');
    var precoProduto = 0
    var precoDesc = 0
    var precoEntrega = 0
//<p>Total a pagar:</p>
    
    if (prodSelected == 'Coca-cola Lata') {
        precoProduto = 3.5
    } 
    else if (prodSelected == 'Coxinha') {
        precoProduto = 4
    }
    else if (prodSelected == 'Pão de Queijo'){
        precoProduto= 3
    }

    if (dinheiro.checked == true) {
        precoDesc = 0.1
    }
    else {
        precoDesc = 0
    }

    if (entrega.checked == true) {
        precoEntrega = 6
    } else {
        precoEntrega = 0
    }

    var total = parseFloat(precoProduto) * parseFloat(quant.value)

    var totalDesc = (total - (total*precoDesc)) + precoEntrega

    resp1.innerHTML = '<p>Total a pagar: R$ ' + totalDesc.toFixed(2) +'</p>' 
    console.log(total)

    

}

function limpar() {
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var resp1 = document.getElementById('resp1')
    txt1.value = ""
    txt2.value = ""
    resp1.innerHTML = 'Troco'

}