function calcular() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var media = (parseFloat(nota1) + parseFloat(nota2)) / 2
    var resp = document.getElementById('resp');
    if (media >= 70) {
        resp.innerHTML = 'Parabéns!!! Você foi aprovado!'
    }
    else if((media < 70) && (media >= 40)) {
        resp.innerHTML = 'Você está de prova final!!!'
    }
    else {
        resp.innerHTML = 'Shiii... Você foi reprovado!!!'
    }
}

function limpar() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    resp.innerHTML = ''
}
