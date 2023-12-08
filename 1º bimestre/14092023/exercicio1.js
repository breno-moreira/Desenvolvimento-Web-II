function calcular() {
    var preco = document.getElementById('preco').value;
    var quant = document.getElementById('quant').value;
    var valor = parseFloat(preco) * parseFloat(quant)
    var desc = valor * 0.1
    var resp = document.getElementById('resp');
    if (quant > 10) {
        resp.innerHTML = 'Você ganhou 10% de desconto (R$ ' + desc.toFixed(2) +'), o valor total das compras é: R$ ' + (valor-desc).toFixed(2)
    }
    else {
        resp.innerHTML = 'O valor total das compras é: R$ ' + valor.toFixed(2)
    }
}

function limpar() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    resp.innerHTML = ''
}
