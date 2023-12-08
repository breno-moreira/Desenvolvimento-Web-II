function CalcularTriangulo() {
    var n1 = parseFloat(document.getElementById('n1').value)
    var n1Str = document.getElementById('n1').value
    var n2 = parseFloat(document.getElementById('n2').value)
    var n2Str = document.getElementById('n2').value
    var n3 = parseFloat(document.getElementById('n3').value)
    var n3Str = document.getElementById('n3').value
    var resp = document.getElementById('resp')

    if (n1Str == '' || n2Str == '' || n3Str == '') {
        resp.innerHTML = 'Preencha os campos!';
    }
    else {
        if (n1 < (n2 + n3) && n2 < (n1 + n3) && n3 < (n1 + n2)) {
            if (n1 == n2 && n2 == n3) {
                resp.innerHTML = 'É possível montar um triângulo equilátero!';
            } else if (n1 == n2 || n1 == n3 || n2 == n3) {
                resp.innerHTML = 'É possível montar um triângulo isósceles!';
            } else {
                resp.innerHTML = 'É possível montar um triângulo escaleno!';
            }
        } else {
            resp.innerHTML = 'Não é possível montar um triângulo com esses valores.';
        }
    }

}

function limparTriangulo() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    n1.value = ""
    n2.value = ""
    n3.value = ''

}