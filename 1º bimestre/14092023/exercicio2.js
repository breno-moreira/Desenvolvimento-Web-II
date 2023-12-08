function calcular() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = parseFloat(peso) / (parseFloat(altura) ** 2)
    var resp = document.getElementById('resp');
    if (imc < 22) {
        resp.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + ', e você está abaixo do peso ideal!'
    }
    else if (imc >= 22 && imc <= 26) {
        resp.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + ', e você está com o peso adequado!'
    }
    else if (imc > 26 && imc <= 32) {
        resp.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + ', e você está com sobrepeso!'
    }
    else {
        resp.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + ', e você está com obesidade!'
    }
}

function limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    resp.innerHTML = ''
}
