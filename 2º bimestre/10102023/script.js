function carregarProdutos(){
    var marca = document.getElementById('marca')
    var m = marca.options[marca.selectedIndex].text;
    var produtos = document.getElementById('produtos')
    if (m == 'Apple'){
        produtos.innerHTML = '<option>IPhone</option>'
        produtos.innerHTML += '<option>Ipad</option>'
        produtos.innerHTML += '<option>Macbook</option>'
    } else if (m == 'Samsung'){
        produtos.innerHTML = '<option>Galaxy S20</option>'
        produtos.innerHTML += '<option>Galaxy S21</option>'
        produtos.innerHTML += '<option>Galaxy Tab</option>'
    } else if(m == 'Xiaomi'){
        produtos.innerHTML = '<option>SmartWatch</option>'
        produtos.innerHTML += '<option>Redmi Note 7</option>'
        produtos.innerHTML += '<option>AirDots</option>'
    }
    else{
        produtos.innerHTML = '<option></option>'
    }
}
function calcularPreco() {
    var quant = document.getElementById('quant')
    var precouni = document.getElementById('precouni')
    var precotot = document.getElementById('precotot')
    var valoruni;
    var valortot;
    var produtos = document.getElementById('produtos')
    var prod = produtos.options[produtos.selectedIndex].text; 
    if (prod == 'IPhone'){
        valoruni = 4599
        valortot = 4599 * Number(quant.value)
        precouni.innerHTML = 'Preço unitário: R$ ' + valoruni.toFixed(2)
        precotot.innerHTML = 'Preço total: R$ ' + valortot.toFixed(2)
    }
}

function calcularPreco() {
    var quant = document.getElementById('quant')
    var precouni = document.getElementById('precouni')
    var precotot = document.getElementById('precotot')
    var valoruni;
    var valortot;
    var produtos = document.getElementById('produtos')
    var prod = produtos.options[produtos.selectedIndex].text; 
    if (prod == 'IPhone'){
        valoruni = 4599
        valortot = 4599 * Number(quant.value)
        precouni.innerHTML = 'Preço unitário: R$ ' + valoruni.toFixed(2)
        precotot.innerHTML = 'Preço total: R$ ' + valortot.toFixed(2)
    }
}
